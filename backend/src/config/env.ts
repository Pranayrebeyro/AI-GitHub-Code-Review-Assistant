import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().default("5000"),

  DATABASE_URL: z.string(),

  JWT_SECRET: z.string(),

  GITHUB_CLIENT_ID: z.string(),

  GITHUB_CLIENT_SECRET: z.string(),

  FRONTEND_URL: z.string(),

  BACKEND_URL: z.string(),

  GEMINI_API_KEY: z.string(),
});

export const env = envSchema.parse(process.env);