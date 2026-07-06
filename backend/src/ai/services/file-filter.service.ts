const IGNORED_DIRECTORIES = [
  "node_modules",
  ".git",
  "dist",
  "build",
  ".next",
  "coverage",
  ".turbo",
  ".vercel",
  ".idea",
  ".vscode",
];

const ALLOWED_EXTENSIONS = [
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".json",
  ".py",
  ".java",
  ".cpp",
  ".c",
  ".cs",
  ".go",
  ".rs",
  ".php",
  ".html",
  ".css",
  ".scss",
  ".md",
  ".sql",
  ".yml",
  ".yaml",
  ".xml",
];

export function isSupportedFile(
  path: string
) {
  for (const folder of IGNORED_DIRECTORIES) {
    if (path.includes(`/${folder}/`)) {
      return false;
    }

    if (path.startsWith(`${folder}/`)) {
      return false;
    }
  }

  return ALLOWED_EXTENSIONS.some((ext) =>
    path.endsWith(ext)
  );
}