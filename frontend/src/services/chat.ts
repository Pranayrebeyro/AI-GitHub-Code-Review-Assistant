import { api } from "./api";

export async function chat(
  owner: string,
  repo: string,
  branch: string,
  question: string
) {
  const response = await api.post(
    "/chat",
    {
      owner,
      repo,
      branch,
      question,
    }
  );

  return response.data;
}