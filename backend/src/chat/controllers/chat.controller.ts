import { Response } from "express";
import { AuthRequest } from "../../auth/middleware/auth.middleware.js";
import { repositoryChat } from "../services/chat.service.js";

export async function chatController(
  req: AuthRequest,
  res: Response
) {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const {
      owner,
      repo,
      branch,
      question,
    } = req.body;

    const answer = await repositoryChat(
      req.user.userId,
      owner,
      repo,
      branch,
      question
    );

    return res.json({
      success: true,
      answer,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Chat failed",
    });
  }
}