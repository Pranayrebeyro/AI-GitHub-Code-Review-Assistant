import { Request, Response } from "express";
import { getGitHubOAuthURL } from "../services/github-oauth.service.js";
import { getGitHubAccessToken } from "../services/github-token.service.js";
import { getGitHubUser } from "../services/github-user.service.js";
import { upsertUser } from "../services/user.service.js";
import { generateToken } from "../utils/jwt.js";
import { env } from "../../config/env.js";

export function githubLogin(_req: Request, res: Response) {
  return res.redirect(getGitHubOAuthURL());
}

export async function githubCallback(req: Request, res: Response) {
  try {
    const code = req.query.code as string;

    if (!code) {
      return res.status(400).json({
        success: false,
        message: "Authorization code missing",
      });
    }

    // Exchange authorization code for GitHub access token
    const accessToken = await getGitHubAccessToken(code);

    // Fetch GitHub user profile
    const githubUser = await getGitHubUser(accessToken);

    // Save or update user in PostgreSQL
    const user = await upsertUser(githubUser, accessToken);

    // Generate JWT
    const token = generateToken({
      userId: user.id,
      email: user.email,
    });

    // Store JWT in HttpOnly cookie
    const isProduction = process.env.NODE_ENV === "production";

    res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Redirect to frontend dashboard
    return res.redirect(`${env.FRONTEND_URL}/dashboard`);
  } catch (error: any) {
    console.error("========== GITHUB AUTH ERROR ==========");
    console.error(error);

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
    }

    console.error("=======================================");

    return res.status(500).json({
      success: false,
      message: "GitHub authentication failed",
    });
  }
}