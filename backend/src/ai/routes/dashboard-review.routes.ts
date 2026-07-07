import { Router } from "express";

import { authenticate } from "../../auth/middleware/auth.middleware.js";

import { dashboardReviewController } from "../controllers/dashboard-review.controller.js";

const router = Router();

router.post(
  "/dashboard-review",
  authenticate,
  dashboardReviewController
);

export default router;