import axios from "axios";

export async function getRepositoryContents(
  owner: string,
  repo: string,
  accessToken: string,
  path = ""
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