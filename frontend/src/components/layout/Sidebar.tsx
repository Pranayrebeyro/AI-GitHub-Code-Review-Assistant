import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 p-4">
      <nav className="flex flex-col gap-4">

        <Link to="/">Home</Link>

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/repository">Repository</Link>

        <Link to="/review">Review</Link>

        <Link to="/chat">Chat</Link>

        <Link to="/profile">Profile</Link>

        <Link to="/settings">Settings</Link>

      </nav>
    </aside>
  );
}

export default Sidebar;