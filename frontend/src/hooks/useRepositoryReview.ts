import { useState } from "react";
import toast from "react-hot-toast";

import { reviewRepository } from "../services/repositoryReview";

export function useRepositoryReview() {
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateReview(
    owner: string,
    repo: string,
    branch: string
  ) {
    try {
      setLoading(true);

      const data = await reviewRepository(
        owner,
        repo,
        branch
      );

      setReview(data.review);

      toast.success(
        "Repository review generated successfully."
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to generate repository review."
      );
    } finally {
      setLoading(false);
    }
  }

  return {
    review,
    loading,
    generateReview,
  };
}