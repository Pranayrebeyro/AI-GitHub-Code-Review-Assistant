import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ChatBox from "../../components/chat/ChatBox";
import CodeViewer from "../../components/common/CodeViewer";
import RepositoryLoading from "../../components/repository/RepositoryLoading";
import RepositoryReview from "../../components/repository/RepositoryReview";
import EmptyState from "../../components/ui/EmptyState";

import { useRepositoryReview } from "../../hooks/useRepositoryReview";

import { getLanguage } from "../../utils/getLanguage";

import RepositoryDashboard from "../../components/dashboard/RepositoryDashboard";
import { useDashboardReview } from "../../hooks/useDashboardReview";

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

  const [contents, setContents] =
    useState<RepositoryItem[]>([]);

  const [currentPath, setCurrentPath] =
    useState("");

  const [selectedFile, setSelectedFile] =
    useState("");

  const [selectedPath, setSelectedPath] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const {
    review,
    loading: reviewLoading,
    generateReview,
  } = useRepositoryReview();

  const {
    dashboard,
    loading: dashboardLoading,
    generateDashboard,
  } = useDashboardReview();

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
      setSelectedPath(path);
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
    return <RepositoryLoading />;
  }

  return (
    <div className="space-y-8 text-white">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold break-all">
          {repository.full_name}
        </h1>

        <p className="mt-2 text-slate-400">
          {repository.description ??
            "No description"}
        </p>

      </div>

      {/* Review Button */}

      <div className="flex justify-end">

        <button
          onClick={() =>
            generateReview(
              owner,
              repo,
              repository.default_branch
            )
          }
          className="rounded-lg bg-cyan-600 px-5 py-2 font-semibold text-white transition hover:bg-cyan-700"
        >
          🤖 Review Repository
        </button>

      </div>

      {/* Repository Stats */}

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">

        <div className="rounded-lg bg-slate-900 p-4">
          ⭐ {repository.stargazers_count}
        </div>

        <div className="rounded-lg bg-slate-900 p-4">
          🍴 {repository.forks_count}
        </div>

        <div className="rounded-lg bg-slate-900 p-4">
          🐞 {repository.open_issues_count}
        </div>

        <div className="rounded-lg bg-slate-900 p-4">
          💻 {repository.language ?? "N/A"}
        </div>

        <div className="rounded-lg bg-slate-900 p-4">
          🌿 {repository.default_branch}
        </div>

        <div className="rounded-lg bg-slate-900 p-4">
          {repository.private
            ? "🔒 Private"
            : "🌍 Public"}
        </div>

      </div>

      {/* Explorer + Preview */}

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">

        {/* Explorer */}

        <div className="overflow-hidden rounded-lg bg-slate-900 p-5">

          <div className="mb-4 flex items-center justify-between">

            <h2 className="text-xl font-bold">
              Explorer
            </h2>

            <button
              onClick={goBack}
              className="rounded bg-slate-700 px-3 py-1 hover:bg-slate-600"
            >
              Back
            </button>

          </div>

          <p className="mb-4 break-all text-sm text-slate-400">
            {currentPath || "/"}
          </p>

          <div className="max-h-[600px] space-y-2 overflow-y-auto">

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
                className="block w-full rounded bg-slate-800 p-3 text-left transition hover:bg-slate-700"
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

        <div className="xl:col-span-2 rounded-lg bg-slate-900 p-5">

          <h2 className="mb-4 text-xl font-bold">
            File Preview
          </h2>

          {selectedFile ? (

            <div className="overflow-x-auto">

              <CodeViewer
                code={selectedFile}
                language={getLanguage(selectedPath)}
              />

            </div>

          ) : (

            <EmptyState
              icon="📂"
              title="No File Selected"
              description="Choose a file from the repository explorer to preview its contents."
            />

          )}

        </div>

      </div>

      {/* AI Repository Review */}

      <RepositoryReview
        review={review}
        loading={reviewLoading}
      />

      <div className="mt-8 rounded-xl bg-slate-900 p-6">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-2xl font-bold text-white">
            📊 AI Dashboard
          </h2>

          <button
            onClick={() =>
              generateDashboard(
                owner,
                repo,
                repository.default_branch
              )
            }
          >
            📊 Generate Dashboard
          </button>

        </div>

        {dashboardLoading && (

          <div className="text-slate-400">
            Generating dashboard...
          </div>

        )}

        {dashboard && (

          <RepositoryDashboard
            review={dashboard}
          />

        )}

      </div>

      {/* AI Chat */}

      <ChatBox
        owner={owner}
        repo={repo}
        branch={repository.default_branch}
      />

    </div>
  );
};

export default RepositoryDetails;