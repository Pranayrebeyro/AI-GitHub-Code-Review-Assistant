import qs from "qs";
import { env } from "../../config/env.js";

export function getGitHubOAuthURL() {
  const root = "https://github.com/login/oauth/authorize";

  console.log("========== GITHUB OAUTH DEBUG ==========");
  console.log("BACKEND_URL:", env.BACKEND_URL);
  console.log("CLIENT_ID:", env.GITHUB_CLIENT_ID);
  console.log(
    "REDIRECT_URI:",
    `${env.BACKEND_URL}/api/auth/github/callback`
  );
  console.log("========================================");

  const query = qs.stringify({
    client_id: env.GITHUB_CLIENT_ID,
    redirect_uri: `${env.BACKEND_URL}/api/auth/github/callback`,
    scope: "read:user user:email repo",
  });

  return `${root}?${query}`;
}