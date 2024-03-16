import { ReactNode } from "react";

type HeadingsProps = {
  children: ReactNode;
  className?: string;
};

const Headings = ({ children, className }: HeadingsProps) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default Headings;
