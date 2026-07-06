import { api } from "./api";

export async function getRepository(
  owner: string,
  repo: string
) {
  const response = await api.get(
    `/github/repository/${owner}/${repo}`
  );

  return response.data;
}

export async function getRepositoryContents(
  owner: string,
  repo: string,
  path = ""
) {
  const response = await api.get(
    `/github/repository/${owner}/${repo}/contents`,
    {
      params: {
        path,
      },
    }
  );

  return response.data;
}