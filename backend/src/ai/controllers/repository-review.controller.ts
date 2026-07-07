import { Response } from "express";
import { prisma } from "../../lib/prisma.js";
import { AuthRequest } from "../../auth/middleware/auth.middleware.js";
import { generateRepositoryReview } from "../services/repository-review.service.js";

export async function repositoryReviewController(
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

    const { owner, repo, branch } = req.body;

    if (!owner || !repo || !branch) {
      return res.status(400).json({
        success: false,
        message: "owner, repo and branch are required",
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: req.user.userId,
      },
    });

    if (!user?.githubAccessToken) {
      return res.status(400).json({
        success: false,
        message: "GitHub account not connected",
      });
    }

    const review =
      await generateRepositoryReview(
        owner,
        repo,
        branch,
        user.githubAccessToken
      );

    return res.json({
      success: true,
      review,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message:
        "Failed to review repository",
    });
  }
}