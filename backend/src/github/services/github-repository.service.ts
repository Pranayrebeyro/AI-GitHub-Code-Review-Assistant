import axios from "axios";

export async function getRepository(
  owner: string,
  repo: string,
  accessToken: string
) {
  const response = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  return response.data;
}