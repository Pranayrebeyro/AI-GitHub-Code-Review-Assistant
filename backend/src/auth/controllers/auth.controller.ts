import { Request, Response } from "express";
import { getGitHubOAuthURL } from "../services/github-oauth.service.js";
import { getGitHubAccessToken } from "../services/github-token.service.js";

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

    const token = await getGitHubAccessToken(code);

    return res.json({
      success: true,
      accessToken: token,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "GitHub authentication failed",
    });
  }
}