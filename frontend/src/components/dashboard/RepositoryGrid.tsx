import RepositoryCard from "./RepositoryCard";
import { useRepositories } from "../../hooks/useRepositories";

const RepositoryGrid = () => {
  const { repositories, loading } = useRepositories();

  if (loading) {
    return (
      <p className="text-white">
        Loading repositories...
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {repositories.map((repository) => (
        <RepositoryCard
          key={repository.id}
          repository={repository}
        />
      ))}
    </div>
  );
};

export default RepositoryGrid;