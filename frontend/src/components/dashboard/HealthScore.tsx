interface Props {
  score: number;
}

const HealthScore = ({ score }: Props) => {
  return (
    <div className="rounded-xl bg-slate-900 p-8 text-center">

      <h2 className="text-2xl font-bold">
        Repository Health
      </h2>

      <div className="mt-6 text-6xl font-bold text-cyan-400">
        {score}
      </div>

      <div className="mt-2 text-slate-400">
        /100
      </div>

    </div>
  );
};

export default HealthScore;