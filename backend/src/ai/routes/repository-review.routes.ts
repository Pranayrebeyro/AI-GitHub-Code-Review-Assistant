import { Router } from "express";
import { authenticate } from "../../auth/middleware/auth.middleware.js";
import { repositoryReviewController } from "../controllers/repository-review.controller.js";

const router = Router();

router.post(
  "/repository-review",
  authenticate,
  repositoryReviewController
);

export default router;