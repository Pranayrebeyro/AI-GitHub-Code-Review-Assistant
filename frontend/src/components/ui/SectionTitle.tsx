interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({
  title,
  subtitle,
}: SectionTitleProps) => {
  return (
    <div className="mb-14 text-center">
      <h2 className="text-4xl font-bold text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;