import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  className?: string;
};

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full bg-gradient-to-t from-blue-900 via-indigo-800 to-blue-700 px-6 py-2 text-white transition duration-300 hover:from-blue-800 hover:via-indigo-700 hover:to-blue-500 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
