import { Request, Response } from "express";
import { reviewCode } from "../services/gemini.service.js";

export async function reviewCodeController(
  req: Request,
  res: Response
) {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({
        success: false,
        message: "Code is required",
      });
    }

    const review = await reviewCode(code);

    return res.json({
      success: true,
      review,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to review code",
    });
  }
}