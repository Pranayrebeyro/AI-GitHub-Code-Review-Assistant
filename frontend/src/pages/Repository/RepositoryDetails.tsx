import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getRepository,
  getRepositoryContents,
} from "../../services/repository";

import { getRepositoryFile } from "../../services/file";

interface RepositoryItem {
  name: string;
  path: string;
  sha: string;
  type: "file" | "dir";
}

interface Repository {
  full_name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  default_branch: string;
  private: boolean;
}

const RepositoryDetails = () => {
  const { owner = "", repo = "" } = useParams();

  const [repository, setRepository] =
    useState<Repository | null>(null);

  const [contents, setContents] = useState<
    RepositoryItem[]
  >([]);

  const [currentPath, setCurrentPath] =
    useState("");

  const [selectedFile, setSelectedFile] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadRepository() {
      try {
        const data = await getRepository(owner, repo);
        setRepository(data.repository);
      } catch (error) {
        console.error(error);
      }
    }

    loadRepository();
  }, [owner, repo]);

  useEffect(() => {
    async function loadContents() {
      try {
        const data =
          await getRepositoryContents(
            owner,
            repo,
            currentPath
          );

        setContents(data.contents);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadContents();
  }, [owner, repo, currentPath]);

  async function openFile(path: string) {
    try {
      const data =
        await getRepositoryFile(
          owner,
          repo,
          path
        );

      const decoded = atob(
        data.file.content.replace(/\n/g, "")
      );

      setSelectedFile(decoded);
    } catch (error) {
      console.error(error);
    }
  }

  function goBack() {
    if (!currentPath) return;

    const parts = currentPath.split("/");

    parts.pop();

    setCurrentPath(parts.join("/"));
  }

  if (loading || !repository) {
    return (
      <div className="p-8 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-8 text-white">

      {/* Repository Header */}

      <div>

        <h1 className="text-3xl font-bold">
          {repository.full_name}
        </h1>

        <p className="mt-2 text-slate-400">
          {repository.description ??
            "No description"}
        </p>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

        <div className="rounded bg-slate-900 p-4">
          ⭐ {repository.stargazers_count}
        </div>

        <div className="rounded bg-slate-900 p-4">
          🍴 {repository.forks_count}
        </div>

        <div className="rounded bg-slate-900 p-4">
          🐞 {repository.open_issues_count}
        </div>

        <div className="rounded bg-slate-900 p-4">
          💻 {repository.language}
        </div>

        <div className="rounded bg-slate-900 p-4">
          🌿 {repository.default_branch}
        </div>

        <div className="rounded bg-slate-900 p-4">
          {repository.private ? "🔒 Private" : "🌍 Public"}
        </div>

      </div>

      <div className="grid grid-cols-3 gap-8">

        {/* Explorer */}

        <div className="rounded-lg bg-slate-900 p-5">

          <div className="mb-4 flex items-center justify-between">

            <h2 className="text-xl font-bold">
              Explorer
            </h2>

            <button
              onClick={goBack}
              className="rounded bg-slate-700 px-3 py-1"
            >
              Back
            </button>

          </div>

          <p className="mb-4 text-sm text-slate-400">

            {currentPath || "/"}

          </p>

          <div className="space-y-2">

            {contents.map((item) => (

              <button
                key={item.sha}
                onClick={() => {

                  if (item.type === "dir") {

                    setCurrentPath(item.path);

                    setSelectedFile("");

                  } else {

                    openFile(item.path);

                  }

                }}
                className="block w-full rounded bg-slate-800 p-3 text-left hover:bg-slate-700"
              >

                {item.type === "dir"
                  ? "📁"
                  : "📄"}{" "}

                {item.name}

              </button>

            ))}

          </div>

        </div>

        {/* Preview */}

        <div className="col-span-2 rounded-lg bg-slate-900 p-5">

          <h2 className="mb-4 text-xl font-bold">

            File Preview

          </h2>

          <pre className="overflow-auto whitespace-pre-wrap rounded bg-black p-4 text-sm">

            {selectedFile ||

              "Select a file to preview"}

          </pre>

        </div>

      </div>

    </div>
  );
};

export default RepositoryDetails;