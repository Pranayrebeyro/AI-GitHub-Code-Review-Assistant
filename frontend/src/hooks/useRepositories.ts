import { useEffect, useState } from "react";
import { getRepositories } from "../services/github";

export interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  html_url: string;
  private: boolean;
}

export function useRepositories() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRepositories() {
      try {
        const data = await getRepositories();
        setRepositories(data.repositories);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadRepositories();
  }, []);

  return {
    repositories,
    loading,
  };
}