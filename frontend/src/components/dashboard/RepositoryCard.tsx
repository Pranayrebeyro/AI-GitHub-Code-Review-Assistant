import { Link } from "react-router-dom";
import type { Repository } from "../../hooks/useRepositories";

interface Props {
  repository: Repository;
}

const RepositoryCard = ({ repository }: Props) => {
  return (
    <Link
      to={`/repository/${repository.full_name}`}
      className="block rounded-xl border border-slate-700 bg-slate-900 p-5 hover:border-cyan-500 transition"
    >
      <h2 className="text-xl font-semibold">
        {repository.name}
      </h2>

      <p className="mt-2 text-slate-400">
        {repository.description ?? "No description"}
      </p>

      <div className="mt-4 flex gap-5 text-sm">
        <span>⭐ {repository.stargazers_count}</span>
        <span>🍴 {repository.forks_count}</span>
        <span>🐞 {repository.open_issues_count}</span>
      </div>

      <p className="mt-3 text-cyan-400">
        {repository.language ?? "Unknown"}
      </p>
    </Link>
  );
};

export default RepositoryCard;