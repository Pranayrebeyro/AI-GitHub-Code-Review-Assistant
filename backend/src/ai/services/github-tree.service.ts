import axios from "axios";

export async function getRepositoryTree(
  owner: string,
  repo: string,
  branch: string,
  accessToken: string
) {
  const response = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  return response.data.tree;
}