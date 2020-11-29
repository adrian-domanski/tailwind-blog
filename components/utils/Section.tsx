import React from "react";

interface IProps {
  children?: React.ReactNode;
  className?: string;
}

const Section: React.FC<IProps> = ({ children, className = "" }) => {
  return <section className={`py-5 px-6 ${className}`}>{children}</section>;
};

export default Section;
