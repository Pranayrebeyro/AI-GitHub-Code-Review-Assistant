import { reviewRepository } from "./gemini.service.js";
import { getRepositoryTree } from "./github-tree.service.js";
import { getReviewableFiles } from "./repository-files.service.js";
import { downloadRepositoryFiles } from "./repository-downloader.service.js";
import { chunkRepository } from "./repository-chunker.service.js";

import {
  logInfo,
  logError,
} from "../../utils/logger.js";

export async function generateRepositoryReview(
  owner: string,
  repo: string,
  branch: string,
  accessToken: string
) {
  try {
    logInfo(
      `Generating repository review for ${owner}/${repo}`
    );

    // Step 1: Get repository tree
    const tree = await getRepositoryTree(
      owner,
      repo,
      branch,
      accessToken
    );

    // Step 2: Filter supported files
    const reviewableFiles =
      getReviewableFiles(tree);

    // Step 3: Download file contents
    const downloadedFiles =
      await downloadRepositoryFiles(
        owner,
        repo,
        accessToken,
        reviewableFiles
      );

    // Step 4: Split repository into chunks
    const chunks =
      chunkRepository(downloadedFiles);

    const reviews: string[] = [];

    // Step 5: Review each chunk
    for (const chunk of chunks) {
      const review =
        await reviewRepository(chunk);

      reviews.push(review);
    }

    // Step 6: Merge reviews
    logInfo(
      `Repository review completed for ${owner}/${repo}`
    );

    return reviews.join("\n\n---\n\n");
  } catch (error) {
    logError(
      `Repository review failed for ${owner}/${repo}`,
      error
    );

    throw error;
  }
}