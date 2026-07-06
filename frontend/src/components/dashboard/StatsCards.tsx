import {
  FolderGit2,
  Bot,
  ShieldCheck,
  GitPullRequest,
} from "lucide-react";

const stats = [
  {
    title: "Repositories",
    value: "12",
    icon: FolderGit2,
    color: "text-cyan-400",
  },
  {
    title: "AI Reviews",
    value: "86",
    icon: Bot,
    color: "text-indigo-400",
  },
  {
    title: "Security Score",
    value: "94%",
    icon: ShieldCheck,
    color: "text-green-400",
  },
  {
    title: "Pull Requests",
    value: "21",
    icon: GitPullRequest,
    color: "text-yellow-400",
  },
];

const StatsCards = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-indigo-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400">{stat.title}</p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  {stat.value}
                </h2>
              </div>

              <Icon
                size={34}
                className={stat.color}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;