import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "../../config/env.js";
import { REVIEW_PROMPT } from "../prompts/review.prompt.js";
import { REPOSITORY_REVIEW_PROMPT } from "../prompts/repository-review.prompt.js";
import {
  getAICache,
  saveAICache,
} from "../../cache/ai-cache.js";

import {
  logInfo,
  logError,
} from "../../utils/logger.js";

const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function reviewCode(code: string) {
  const prompt = `
${REVIEW_PROMPT}

${code}
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}

export async function reviewRepository(
  repository: string
) {
  const prompt = `
${REPOSITORY_REVIEW_PROMPT}

${repository}
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}

/*
|--------------------------------------------------------------------------
| Generic Gemini Prompt
|--------------------------------------------------------------------------
*/

export async function askGemini(
  prompt: string
) {
  const cacheKey = prompt;

  const cached =
    getAICache(cacheKey);

  if (cached) {
    logInfo(
      "AI response loaded from cache."
    );

    return cached;
  }

  const result =
    await model.generateContent(prompt);

  const response =
    result.response.text();

  saveAICache(
    cacheKey,
    response
  );

  logInfo(
    "AI response cached."
  );

  return response;
}