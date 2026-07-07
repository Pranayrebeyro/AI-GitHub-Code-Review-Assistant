export function getLanguage(path: string) {
  const extension =
    path.split(".").pop()?.toLowerCase();

  switch (extension) {
    case "ts":
      return "typescript";

    case "tsx":
      return "tsx";

    case "js":
      return "javascript";

    case "jsx":
      return "jsx";

    case "json":
      return "json";

    case "css":
      return "css";

    case "html":
      return "html";

    case "md":
      return "markdown";

    case "py":
      return "python";

    case "java":
      return "java";

    case "cpp":
      return "cpp";

    case "c":
      return "c";

    case "go":
      return "go";

    case "rs":
      return "rust";

    case "sql":
      return "sql";

    default:
      return "text";
  }
}