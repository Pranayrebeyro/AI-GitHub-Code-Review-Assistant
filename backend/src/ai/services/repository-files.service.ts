import { isSupportedFile } from "./file-filter.service.js";

export function getReviewableFiles(
  tree: any[]
) {
  return tree.filter((item) => {
    return (
      item.type === "blob" &&
      isSupportedFile(item.path)
    );
  });
}