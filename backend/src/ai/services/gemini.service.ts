import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "../../config/env.js";
import { REVIEW_PROMPT } from "../prompts/review.prompt.js";
import { REPOSITORY_REVIEW_PROMPT } from "../prompts/repository-review.prompt.js";

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