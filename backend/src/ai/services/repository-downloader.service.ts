import { loadRepositoryFile } from "./github-file-loader.service.js";

interface RepositoryFile {
  path: string;
}

export async function downloadRepositoryFiles(
  owner: string,
  repo: string,
  accessToken: string,
  files: RepositoryFile[]
) {
  const results: {
    path: string;
    content: string;
  }[] = [];

  for (const file of files) {
    try {
      const response = await loadRepositoryFile(
        owner,
        repo,
        file.path,
        accessToken
      );

      if (!response.content) {
        continue;
      }

      const content = Buffer.from(
        response.content,
        "base64"
      ).toString("utf8");

      results.push({
        path: file.path,
        content,
      });
    } catch (error) {
      console.error(
        `Failed to load ${file.path}`
      );
    }
  }

  return results;
}