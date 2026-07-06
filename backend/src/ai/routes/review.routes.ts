import { Router } from "express";
import { reviewCodeController } from "../controllers/review.controller.js";

const router = Router();

router.post(
  "/review",
  reviewCodeController
);

export default router;