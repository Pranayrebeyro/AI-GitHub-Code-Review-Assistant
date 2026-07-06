import { motion } from "framer-motion";
import {
  GitBranch,
  FolderGit2,
  Bot,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    icon: GitBranch,
    title: "Connect GitHub",
    description:
      "Securely sign in using GitHub OAuth and authorize DevPilot AI to access your repositories.",
  },
  {
    icon: FolderGit2,
    title: "Select Repository",
    description:
      "Choose any repository you want to analyze from your GitHub account.",
  },
  {
    icon: Bot,
    title: "AI Code Review",
    description:
      "Our AI analyzes your repository, identifies bugs, security issues, and suggests improvements.",
  },
  {
    icon: BarChart3,
    title: "Review Dashboard",
    description:
      "View repository health, AI insights, security analysis, and detailed reports in one place.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <p className="font-semibold uppercase tracking-widest text-indigo-400">
            Workflow
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            How DevPilot AI Works
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            From GitHub authentication to AI-powered insights,
            DevPilot AI makes repository analysis simple and fast.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="relative rounded-3xl border border-slate-800 bg-slate-900/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <div className="absolute right-6 top-6 text-5xl font-bold text-slate-800">
                  {index + 1}
                </div>

                <div className="mb-6 inline-flex rounded-2xl bg-indigo-500/10 p-4 text-indigo-400">
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;