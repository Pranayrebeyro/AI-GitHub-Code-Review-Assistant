import { api } from "./api";

export async function reviewRepository(
  owner: string,
  repo: string,
  branch: string
) {
  const response = await api.post(
    "/ai/repository-review",
    {
      owner,
      repo,
      branch,
    }
  );

  return response.data;
}