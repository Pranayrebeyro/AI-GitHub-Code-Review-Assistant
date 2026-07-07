import DashboardCard from "./DashboardCard";
import ScoreCircle from "./ScoreCircle";

import type { DashboardReview } from "../../services/dashboardReview";

interface Props {
  review: DashboardReview;
}

const RepositoryDashboard = ({
  review,
}: Props) => {
  return (
    <div className="space-y-8">

      {/* Health Score */}

      <div className="rounded-xl bg-slate-900 p-8">

        <h2 className="mb-8 text-center text-2xl font-bold text-white">
          Repository Health
        </h2>

        <ScoreCircle
          score={review.healthScore}
        />

      </div>

      {/* Metrics */}

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

        <DashboardCard
          icon="⭐"
          title="Code Quality"
          value={review.codeQuality}
        />

        <DashboardCard
          icon="🔒"
          title="Security"
          value={review.security}
        />

        <DashboardCard
          icon="⚡"
          title="Performance"
          value={review.performance}
        />

        <DashboardCard
          icon="🏗"
          title="Architecture"
          value={review.architecture}
        />

      </div>

      {/* Summary */}

      <div className="rounded-xl bg-slate-900 p-6">

        <h2 className="mb-4 text-xl font-bold text-white">
          Summary
        </h2>

        <p className="leading-7 text-slate-300">
          {review.summary}
        </p>

      </div>

      {/* Recommendations */}

      <div className="rounded-xl bg-slate-900 p-6">

        <h2 className="mb-4 text-xl font-bold text-white">
          Recommendations
        </h2>

        <ul className="space-y-3">

          {review.recommendations.map(
            (recommendation, index) => (

              <li
                key={index}
                className="rounded-lg bg-slate-800 p-3 text-slate-300"
              >
                ✅ {recommendation}
              </li>

            )
          )}

        </ul>

      </div>

    </div>
  );
};

export default RepositoryDashboard;