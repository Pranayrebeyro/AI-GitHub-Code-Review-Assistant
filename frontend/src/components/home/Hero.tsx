import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import RepositoryPreview from "./RepositoryPreview";
import { APP } from "../../constants/app";

const Hero = () => {
  const handleLogin = () => {
    window.location.href = APP.githubAuth;
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 pt-32 pb-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="absolute right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right,#475569 1px,transparent 1px),
            linear-gradient(to bottom,#475569 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-6 lg:grid-cols-2">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
            🚀 AI Powered GitHub Assistant
          </span>

          <h1 className="mt-8 text-6xl font-extrabold leading-tight text-white">
            DevPilot AI
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-9 text-slate-400">
            Analyze GitHub repositories with AI, detect bugs, improve code
            quality, review pull requests, and chat with your codebase using
            modern Generative AI.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button
              onClick={handleLogin}
              className="flex items-center gap-3 rounded-xl bg-white px-10 py-5 text-lg font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/30"
            >
              <FaGithub />
              Continue with GitHub
              <ArrowRight size={20} />
            </button>

            <button className="rounded-xl border border-slate-700 px-10 py-5 text-lg font-semibold text-white transition-all duration-300 hover:border-indigo-500 hover:bg-slate-900">
              Live Demo
            </button>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="lg:mt-8"
          initial={{ opacity: 0, x: 40 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            x: { duration: 0.8 },
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <RepositoryPreview />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;