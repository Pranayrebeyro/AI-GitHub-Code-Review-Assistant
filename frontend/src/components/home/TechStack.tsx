import { motion } from "framer-motion";
import {
  Atom,
  Database,
  Server,
  GitBranch,
  Bot,
  Code2,
  Shield,
  Layers,
} from "lucide-react";

const technologies = [
  {
    icon: Atom,
    name: "React 19",
    description: "Modern UI Development",
    color: "text-cyan-400",
  },
  {
    icon: Code2,
    name: "TypeScript",
    description: "Type Safe Development",
    color: "text-blue-400",
  },
  {
    icon: Server,
    name: "Node.js",
    description: "Backend Runtime",
    color: "text-green-400",
  },
  {
    icon: Layers,
    name: "Express",
    description: "REST API Framework",
    color: "text-gray-300",
  },
  {
    icon: Database,
    name: "Prisma + PostgreSQL",
    description: "Database ORM",
    color: "text-emerald-400",
  },
  {
    icon: GitBranch,
    name: "GitHub API",
    description: "Repository Integration",
    color: "text-white",
  },
  {
    icon: Bot,
    name: "Gemini AI",
    description: "AI Code Review",
    color: "text-purple-400",
  },
  {
    icon: Shield,
    name: "JWT Authentication",
    description: "Secure Login",
    color: "text-orange-400",
  },
];

const TechStack = () => {
  return (
    <section
      id="tech"
      className="bg-slate-900 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-widest text-indigo-400">
            Technology Stack
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Built with Modern Technologies
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            DevPilot AI combines modern frontend technologies,
            scalable backend architecture, AI services,
            authentication, and cloud-ready tools.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-slate-800 bg-slate-950/70 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/20"
              >
                <div
                  className={`mb-6 inline-flex rounded-2xl bg-slate-800 p-4 ${tech.color}`}
                >
                  <Icon size={34} />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {tech.name}
                </h3>

                <p className="mt-3 text-slate-400">
                  {tech.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;