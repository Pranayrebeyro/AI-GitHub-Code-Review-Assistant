import { Router } from "express";
import { authenticate } from "../../auth/middleware/auth.middleware.js";
import { chatController } from "../controllers/chat.controller.js";

const router = Router();

router.post(
  "/chat",
  authenticate,
  chatController
);

export default router;