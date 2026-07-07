import { useEffect, useState } from "react";
import { getRepository } from "../services/repository";

export function useRepository(
  owner: string,
  repo: string
) {
  const [repository, setRepository] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRepository() {
      try {
        const data = await getRepository(owner, repo);
        setRepository(data.repository);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadRepository();
  }, [owner, repo]);

  return {
    repository,
    loading,
  };
}