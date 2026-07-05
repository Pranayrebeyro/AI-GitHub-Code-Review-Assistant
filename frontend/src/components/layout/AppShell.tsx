import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function AppShell() {
  return (
    <div className="min-h-screen bg-slate-950">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8 text-white">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default AppShell;