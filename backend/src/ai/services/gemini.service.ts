import { GoogleGenerativeAI } from "@google/generative-ai";
import { env } from "../../config/env.js";
import { REVIEW_PROMPT } from "../prompts/review.prompt.js";

const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function reviewCode(code: string) {
  const prompt = `
${REVIEW_PROMPT}

Source Code:

\`\`\`
${code}
\`\`\`
`;

  const result = await model.generateContent(prompt);

  const response = result.response;

  return response.text();
}