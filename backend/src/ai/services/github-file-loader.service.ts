import axios from "axios";

export async function loadRepositoryFile(
  owner: string,
  repo: string,
  path: string,
  accessToken: string
) {
  const response = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  return response.data;
}