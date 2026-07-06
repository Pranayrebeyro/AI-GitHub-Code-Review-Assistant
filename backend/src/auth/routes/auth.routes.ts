import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import { me } from "../controllers/me.controller.js";
import { logout } from "../controllers/logout.controller.js";

import {
  githubLogin,
  githubCallback,
} from "../controllers/auth.controller.js";

const router = Router();

router.get("/github", githubLogin);
router.get("/me", authenticate, me);
router.post("/logout", logout);
router.get("/github/callback", githubCallback);

export default router;