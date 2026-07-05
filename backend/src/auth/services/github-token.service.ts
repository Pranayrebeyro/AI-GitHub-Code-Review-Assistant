import axios from "axios";
import { env } from "../../config/env.js";

interface GitHubTokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
}

export async function getGitHubAccessToken(code: string) {
  const response = await axios.post<GitHubTokenResponse>(
    "https://github.com/login/oauth/access_token",
    {
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
    },
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  return response.data.access_token;
}