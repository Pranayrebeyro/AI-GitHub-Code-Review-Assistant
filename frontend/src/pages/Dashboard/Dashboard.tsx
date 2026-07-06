import WelcomeCard from "../../components/dashboard/WelcomeCard";
import SearchBar from "../../components/dashboard/SearchBar";
import StatsCards from "../../components/dashboard/StatsCards";
import RepositoryGrid from "../../components/dashboard/RepositoryGrid";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <WelcomeCard />

      <SearchBar />

      <StatsCards />

      <RepositoryGrid />
    </div>
  );
};

export default Dashboard;