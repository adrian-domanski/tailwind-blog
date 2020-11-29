import React from "react";

interface IProps {
  children?: React.ReactNode;
  className?: string;
}

const CategoryBadge: React.FC<IProps> = ({ children, className = "" }) => {
  return (
    <span
      className={`bg-gradient py-1 px-3 text-white text-sm rounded-full ${className}`}
    >
      {children}
    </span>
  );
};

export default CategoryBadge;
