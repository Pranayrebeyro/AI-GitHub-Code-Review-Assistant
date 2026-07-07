import { askGemini } from "../../ai/services/gemini.service.js";
import { buildChatPrompt } from "../prompts/chat.prompt.js";
import { loadRepository } from "./repository-loader.service.js";
import { buildContext } from "./context-builder.service.js";

import {
  logInfo,
  logError,
} from "../../utils/logger.js";

export async function repositoryChat(
  userId: string,
  owner: string,
  repo: string,
  branch: string,
  question: string
) {
  try {
    // Log chat request
    logInfo(
      `Repository chat started for ${owner}/${repo}`
    );

    // Step 1: Load repository
    const files = await loadRepository(
      userId,
      owner,
      repo,
      branch
    );

    // Step 2: Build repository context
    const context = buildContext(files);

    // Step 3: Create AI prompt
    const prompt = buildChatPrompt(
      repo,
      question,
      context
    );

    // Step 4: Get AI response
    const answer = await askGemini(prompt);

    // Log success
    logInfo(
      `Repository chat completed for ${owner}/${repo}`
    );

    return answer;
  } catch (error) {
    // Log failure
    logError(
      `Repository chat failed for ${owner}/${repo}`,
      error
    );

    throw error;
  }
}