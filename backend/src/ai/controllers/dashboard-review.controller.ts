import { Response } from "express";

import { AuthRequest } from "../../auth/middleware/auth.middleware.js";

import { generateDashboardReview } from "../services/dashboard-review.service.js";

export async function dashboardReviewController(
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
    } = req.body;

    const review =
      await generateDashboardReview(
        req.user.userId,
        owner,
        repo,
        branch
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
        "Failed to generate dashboard.",
    });

  }
}