import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "DevPilot AI Backend is running 🚀",
  });
});

export default router;