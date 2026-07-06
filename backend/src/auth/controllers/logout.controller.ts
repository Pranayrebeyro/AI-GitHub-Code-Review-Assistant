import { Request, Response } from "express";

export function logout(_req: Request, res: Response) {
  res.clearCookie("token");

  return res.json({
    success: true,
  });
}