import { prisma } from "../../lib/prisma.js";

import { getRepositoryTree } from "../../ai/services/github-tree.service.js";
import { getReviewableFiles } from "../../ai/services/repository-files.service.js";
import { downloadRepositoryFiles } from "../../ai/services/repository-downloader.service.js";

import {
    getRepositoryCache,
    saveRepositoryCache,
} from "../../cache/repository-cache.js";

import {
    logInfo,
    logError,
} from "../../utils/logger.js";

export async function loadRepository(
    userId: string,
    owner: string,
    repo: string,
    branch: string
) {
    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
    });

    if (!user) {
        throw new Error("User not found");
    }

    if (!user.githubAccessToken) {
        throw new Error(
            "GitHub account not connected"
        );
    }

    // Cache key
    const cacheKey = `${owner}/${repo}/${branch}`;

    // Check cache first
    const cachedRepository =
        getRepositoryCache(cacheKey);

    if (cachedRepository) {
        logInfo(
            `Repository loaded from cache: ${cacheKey}`
        );

        return cachedRepository;
    }

    logInfo(
        `Downloading repository: ${cacheKey}`
    );

    // Get repository tree
    const tree = await getRepositoryTree(
        owner,
        repo,
        branch,
        user.githubAccessToken
    );

    // Filter supported files
    const files = getReviewableFiles(tree);

    // Download repository files
    const repository =
        await downloadRepositoryFiles(
            owner,
            repo,
            user.githubAccessToken,
            files
        );

    // Save to cache
    saveRepositoryCache(
        cacheKey,
        repository
    );

    logInfo(
        `Repository cached: ${cacheKey}`
    );

    return repository;
}