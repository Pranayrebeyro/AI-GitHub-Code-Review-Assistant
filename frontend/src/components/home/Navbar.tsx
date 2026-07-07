import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import { APP } from "../../constants/app";

const Navbar = () => {
  const handleLogin = () => {
    window.location.href = APP.githubAuth;
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed left-0 top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-lg"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-white">
          DevPilot AI
        </h1>

        <nav className="hidden gap-10 text-slate-300 md:flex">
          <a href="#features" className="hover:text-white">
            Features
          </a>

          <a href="#tech" className="hover:text-white">
            Tech Stack
          </a>

          <a href="#how-it-works" className="hover:text-white">
            How It Works
          </a>

          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>

        <button
          onClick={handleLogin}
          className="flex items-center gap-2 rounded-lg bg-white px-5 py-2 font-semibold text-slate-900 transition hover:scale-105"
        >
          <FaGithub />
          Login
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;