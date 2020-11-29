import React from "react";

interface IProps {
  className?: string;
  children?: React.ReactNode;
}

const Paragraph: React.FC<IProps> = ({ className = "", children }) => {
  return (
    <p className={`${className} text-center text-gray-700 text-lg`}>
      {children}
    </p>
  );
};

export default Paragraph;
