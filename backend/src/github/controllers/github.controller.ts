import { Response } from "express";
import { prisma } from "../../lib/prisma.js";
import { AuthRequest } from "../../auth/middleware/auth.middleware.js";
import { getRepositories } from "../services/github-repositories.service.js";
import { getRepository } from "../services/github-repository.service.js";
import { getRepositoryContents } from "../services/github-contents.service.js";

export async function getUserRepositories(
  req: AuthRequest,
  res: Response
) {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: req.user.userId,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (!user.githubAccessToken) {
      return res.status(400).json({
        success: false,
        message: "GitHub account not connected",
      });
    }

    const repositories = await getRepositories(
      user.githubAccessToken
    );

    return res.json({
      success: true,
      repositories,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch repositories",
    });
  }
}

export async function getRepositoryDetails(
  req: AuthRequest,
  res: Response
) {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const owner = req.params.owner as string;
    const repo = req.params.repo as string;

    const user = await prisma.user.findUnique({
      where: {
        id: req.user.userId,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (!user.githubAccessToken) {
      return res.status(400).json({
        success: false,
        message: "GitHub account not connected",
      });
    }

    const repository = await getRepository(
      owner,
      repo,
      user.githubAccessToken
    );

    return res.json({
      success: true,
      repository,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch repository",
    });
  }
}

export async function getRepositoryContentsController(
  req: AuthRequest,
  res: Response
) {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const owner = req.params.owner as string;
    const repo = req.params.repo as string;

    const path =
      (req.query.path as string) || "";

    const user = await prisma.user.findUnique({
      where: {
        id: req.user.userId,
      },
    });

    if (!user?.githubAccessToken) {
      return res.status(400).json({
        success: false,
        message: "GitHub account not connected",
      });
    }

    const contents =
      await getRepositoryContents(
        owner,
        repo,
        user.githubAccessToken,
        path
      );

    return res.json({
      success: true,
      contents,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message:
        "Failed to fetch repository contents",
    });
  }
}