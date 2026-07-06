import { api } from "./api";

export async function getRepositoryFile(
  owner: string,
  repo: string,
  path: string
) {
  const response = await api.get(
    `/github/repository/${owner}/${repo}/file/${path}`
  );

  return response.data;
}