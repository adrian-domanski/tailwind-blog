import React from "react";

interface IProps {
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<IProps> = ({ children, className = "" }) => {
  return (
    <button
      className={`${className} block mx-auto my-4 bg-gradient text-white rounded-full py-2 px-7`}
    >
      {children}
    </button>
  );
};

export default Button;
