import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">

        <div>
          <h2 className="text-2xl font-bold text-white">
            DevPilot AI
          </h2>

          <p className="mt-2 text-slate-400">
            AI-powered GitHub Code Review Platform.
          </p>
        </div>

        <div className="flex gap-6">

          <a
            href="#"
            className="text-slate-400 transition hover:text-white"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="#"
            className="text-slate-400 transition hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;