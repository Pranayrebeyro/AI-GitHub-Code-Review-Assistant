import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({
  children,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-indigo-600
        px-6
        py-3
        font-semibold
        text-white
        transition-all
        duration-300
        hover:bg-indigo-500
        hover:scale-105
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;