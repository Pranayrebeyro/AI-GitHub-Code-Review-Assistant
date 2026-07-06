import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware.js";

export function me(req: AuthRequest, res: Response) {
  return res.json({
    success: true,
    user: req.user,
  });
}