import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import authRoutes from "./auth/routes/auth.routes.js";
import healthRoutes from "./routes/health.routes.js";
import githubRoutes from "./github/routes/github.routes.js";
import reviewRoutes from "./ai/routes/review.routes.js";
import repositoryReviewRoutes from "./ai/routes/repository-review.routes.js";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(compression());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/github", githubRoutes);
app.use("/api/ai", reviewRoutes);
app.use("/api/ai",repositoryReviewRoutes);

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "DevPilot AI Backend is running 🚀",
  });
});

export default app;