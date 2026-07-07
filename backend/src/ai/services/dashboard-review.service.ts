import { askGemini } from "./gemini.service.js";
import { DASHBOARD_REVIEW_PROMPT } from "../prompts/dashboard-review.prompt.js";

import { loadRepository } from "../../chat/services/repository-loader.service.js";
import { buildContext } from "../../chat/services/context-builder.service.js";

import {
  logInfo,
  logError,
} from "../../utils/logger.js";

export async function generateDashboardReview(
  userId: string,
  owner: string,
  repo: string,
  branch: string
) {
  try {
    logInfo(
      `Generating dashboard for ${owner}/${repo}`
    );

    // Step 1: Load repository
    const files = await loadRepository(
      userId,
      owner,
      repo,
      branch
    );

    // Step 2: Build AI context
    const context = buildContext(files);

    // Step 3: Create prompt
    const prompt = `
${DASHBOARD_REVIEW_PROMPT}

${context}
`;

    // Step 4: Ask Gemini
    const response = await askGemini(prompt);

    // Step 5: Clean Gemini response
    const cleaned = response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // Step 6: Parse JSON
    const dashboard = JSON.parse(cleaned);

    logInfo(
      `Dashboard generated successfully for ${owner}/${repo}`
    );

    return dashboard;
  } catch (error) {
    logError(
      `Dashboard generation failed for ${owner}/${repo}`,
      error
    );

    throw error;
  }
}