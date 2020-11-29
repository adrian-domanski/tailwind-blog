import React from "react";

interface IProps {
  children?: React.ReactNode;
  className?: string;
}

const Title: React.FC<IProps> = ({ children, className = "" }) => {
  return (
    <h1
      className={`${className} text-3xl text-center my-5 font-bold text-gray-800 opacity-75`}
    >
      {children}
    </h1>
  );
};

export default Title;
