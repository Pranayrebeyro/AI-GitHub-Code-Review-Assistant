import { prisma } from "../../lib/prisma.js";
import { GitHubUser } from "./github-user.service.js";

export async function upsertUser(
  user: GitHubUser,
  accessToken: string
) {
  return prisma.user.upsert({
    where: {
      githubId: user.id,
    },

    update: {
      username: user.login,
      name: user.name,
      email: user.email,
      avatarUrl: user.avatar_url,
      githubAccessToken: accessToken,
    },

    create: {
      githubId: user.id,
      username: user.login,
      name: user.name,
      email: user.email,
      avatarUrl: user.avatar_url,
      githubAccessToken: accessToken,
    },
  });
}