interface RepositoryFile {
  path: string;
  content: string;
}

export function buildContext(
  files: RepositoryFile[]
) {
  return files
    .map(
      (file) => `
FILE:
${file.path}

CODE:
${file.content}
`
    )
    .join("\n\n========================\n\n");
}