interface RepositoryFile {
  path: string;
  content: string;
}

const MAX_CHARS = 25000;

export function chunkRepository(
  files: RepositoryFile[]
) {
  const chunks: string[] = [];

  let currentChunk = "";

  for (const file of files) {
    const text =
      `\nFILE: ${file.path}\n\n` +
      file.content +
      "\n";

    if (
      currentChunk.length + text.length >
      MAX_CHARS
    ) {
      chunks.push(currentChunk);
      currentChunk = "";
    }

    currentChunk += text;
  }

  if (currentChunk.length) {
    chunks.push(currentChunk);
  }

  return chunks;
}