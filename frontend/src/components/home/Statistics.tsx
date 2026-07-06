import { motion } from "framer-motion";
import {
  GitBranch,
  ShieldCheck,
  Bot,
  Clock,
} from "lucide-react";

const stats = [
  {
    icon: GitBranch,
    value: "500+",
    label: "Repositories Reviewed",
    color: "text-cyan-400",
  },
  {
    icon: ShieldCheck,
    value: "95%",
    label: "Security Detection",
    color: "text-green-400",
  },
  {
    icon: Bot,
    value: "10K+",
    label: "AI Suggestions Generated",
    color: "text-indigo-400",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "AI Availability",
    color: "text-orange-400",
  },
];

const Statistics = () => {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-widest text-indigo-400">
            PERFORMANCE
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Trusted AI Insights
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            DevPilot AI helps developers review repositories faster,
            identify issues earlier, and improve software quality with
            AI-powered recommendations.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-800 bg-slate-950/70 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <div
                  className={`mb-6 flex justify-center ${stat.color}`}
                >
                  <Icon size={42} />
                </div>

                <h3 className="text-5xl font-extrabold text-white">
                  {stat.value}
                </h3>

                <p className="mt-4 text-slate-400">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;