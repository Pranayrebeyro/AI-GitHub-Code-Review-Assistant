import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { APP } from "../../constants/app";

const CTA = () => {
  const handleLogin = () => {
    window.location.href = APP.githubAuth;
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-5xl font-extrabold text-white">
          Ready to Transform Your Code Reviews?
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-slate-400">
          Connect your GitHub account and let DevPilot AI analyze
          your repositories, detect bugs, improve security, and
          accelerate development with AI-powered insights.
        </p>

        <button
          onClick={handleLogin}
          className="mt-12 inline-flex items-center gap-3 rounded-xl bg-white px-10 py-5 text-lg font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/30"
        >
          <FaGithub />
          Continue with GitHub
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default CTA;