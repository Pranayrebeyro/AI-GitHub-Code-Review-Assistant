import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Outlet />
    </main>
  );
};

export default PublicLayout;