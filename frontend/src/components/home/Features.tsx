import { motion } from "framer-motion";
import {
  Brain,
  Bug,
  GitPullRequest,
  ShieldCheck,
  MessageSquare,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Code Review",
    description:
      "Analyze your repository using Generative AI and receive intelligent suggestions for cleaner, more maintainable code.",
  },
  {
    icon: Bug,
    title: "Bug Detection",
    description:
      "Automatically detect potential bugs, logic issues, and risky code patterns before deployment.",
  },
  {
    icon: ShieldCheck,
    title: "Security Analysis",
    description:
      "Identify security vulnerabilities and receive practical recommendations to strengthen your application.",
  },
  {
    icon: GitPullRequest,
    title: "Pull Request Review",
    description:
      "Review pull requests faster with AI-generated summaries and improvement suggestions.",
  },
  {
    icon: MessageSquare,
    title: "AI Chat",
    description:
      "Chat with your codebase and ask questions about architecture, files, functions, and implementation details.",
  },
  {
    icon: BarChart3,
    title: "Repository Insights",
    description:
      "Monitor repository health, code quality, and development trends through a clean dashboard.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-indigo-400 font-semibold">
            FEATURES
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            DevPilot AI combines AI-powered code review,
            repository analysis, security scanning, and
            conversational code assistance into one platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
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
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 transition group-hover:bg-indigo-500 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;