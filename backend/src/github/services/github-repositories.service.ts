import axios from "axios";

export async function getRepositories(
  accessToken: string
) {
  const response = await axios.get(
    "https://api.github.com/user/repos",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  return response.data;
}