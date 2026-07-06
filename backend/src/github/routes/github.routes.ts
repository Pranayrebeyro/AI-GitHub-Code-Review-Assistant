import { Router } from "express";
import { authenticate } from "../../auth/middleware/auth.middleware.js";
import {
  getUserRepositories,
  getRepositoryDetails,
  getRepositoryContentsController,
} from "../controllers/github.controller.js";

const router = Router();

router.get(
  "/repositories",
  authenticate,
  getUserRepositories
);

router.get(
  "/repository/:owner/:repo",
  authenticate,
  getRepositoryDetails
);

router.get(
  "/repository/:owner/:repo/contents",
  authenticate,
  getRepositoryContentsController
);

export default router;