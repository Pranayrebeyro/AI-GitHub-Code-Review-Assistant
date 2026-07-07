interface Props {
  title: string;
  value: string;
}

const MetricCard = ({
  title,
  value,
}: Props) => {
  return (
    <div className="rounded-xl bg-slate-900 p-5">

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-slate-300">
        {value}
      </p>

    </div>
  );
};

export default MetricCard;