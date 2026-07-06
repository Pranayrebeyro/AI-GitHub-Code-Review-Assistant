import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({
  children,
  className = "",
}: CardProps) => {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/70
        p-6
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-indigo-500/40
        hover:shadow-xl
        hover:shadow-indigo-500/10
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;