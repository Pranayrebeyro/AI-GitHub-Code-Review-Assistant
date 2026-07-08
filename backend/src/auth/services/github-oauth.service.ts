import qs from "qs";
import { env } from "../../config/env.js";

export function getGitHubOAuthURL() {
  const redirectUri = `${env.BACKEND_URL}/api/auth/github/callback`;

  throw new Error(
    `BACKEND_URL=${env.BACKEND_URL}\nREDIRECT_URI=${redirectUri}`
  );

  const root = "https://github.com/login/oauth/authorize";

  const query = qs.stringify({
    client_id: env.GITHUB_CLIENT_ID,
    redirect_uri: redirectUri,
    scope: "read:user user:email repo",
  });

  return `${root}?${query}`;
}