import {
  GitBranch,
  ShieldCheck,
  Sparkles,
  GitPullRequest,
  Star,
  GitCommit,
} from "lucide-react";

const RepositoryPreview = () => {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <GitBranch size={28} className="text-white" />

        <div>
          <h3 className="text-2xl font-bold text-white">
            DevPilot AI
          </h3>

          <p className="text-slate-400">
            GitHub Repository
          </p>
        </div>
      </div>

      <div className="mt-10 space-y-6">
        <div className="flex justify-between">
          <span className="text-slate-400">
            Repository Health
          </span>

          <span className="font-bold text-green-400">
            94%
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Security Issues
          </span>

          <span className="flex items-center gap-2 text-yellow-400">
            <ShieldCheck size={18} />

            12
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            AI Status
          </span>

          <span className="flex items-center gap-2 text-indigo-400">
            <Sparkles size={18} />

            Ready
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Open Pull Requests
          </span>

          <span className="flex items-center gap-2 text-cyan-400">
            <GitPullRequest size={18} />

            18
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Stars
          </span>

          <span className="flex items-center gap-2 text-yellow-400">
            <Star size={18} />

            126
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Commits
          </span>

          <span className="flex items-center gap-2 text-emerald-400">
            <GitCommit size={18} />

            842
          </span>
        </div>
      </div>
    </div>
  );
};

export default RepositoryPreview;