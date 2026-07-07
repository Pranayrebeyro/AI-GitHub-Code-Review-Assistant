interface EmptyStateProps {
  title: string;
  description: string;
  icon?: string;
}

const EmptyState = ({
  title,
  description,
  icon = "📄",
}: EmptyStateProps) => {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center rounded-xl border border-dashed border-slate-700 bg-slate-900 p-6 text-center sm:min-h-[300px] sm:p-8">

      <div className="mb-4 text-5xl sm:text-6xl">
        {icon}
      </div>

      <h2 className="mb-3 text-xl font-semibold text-white sm:text-2xl">
        {title}
      </h2>

      <p className="max-w-md text-sm leading-6 text-slate-400 sm:text-base">
        {description}
      </p>

    </div>
  );
};

export default EmptyState;