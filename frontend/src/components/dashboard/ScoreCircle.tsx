interface ScoreCircleProps {
  score: number;
}

const ScoreCircle = ({
  score,
}: ScoreCircleProps) => {
  const color =
    score >= 80
      ? "text-green-400"
      : score >= 60
      ? "text-yellow-400"
      : "text-red-400";

  return (
    <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-8 border-cyan-500 bg-slate-900">

      <div className="text-center">

        <p className={`text-5xl font-bold ${color}`}>
          {score}
        </p>

        <p className="text-slate-400">
          /100
        </p>

      </div>

    </div>
  );
};

export default ScoreCircle;