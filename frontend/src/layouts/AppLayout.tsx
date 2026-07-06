import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;