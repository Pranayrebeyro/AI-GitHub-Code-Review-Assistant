interface DashboardCardProps {
  title: string;
  value: number | string;
  icon: string;
}

const DashboardCard = ({
  title,
  value,
  icon,
}: DashboardCardProps) => {
  return (
    <div className="rounded-xl bg-slate-900 p-5 shadow">

      <div className="mb-3 flex items-center gap-3">

        <span className="text-2xl">
          {icon}
        </span>

        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

      </div>

      <p className="text-3xl font-bold text-cyan-400">
        {value}
      </p>

    </div>
  );
};

export default DashboardCard;