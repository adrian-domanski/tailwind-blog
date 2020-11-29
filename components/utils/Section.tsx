import React from "react";

interface IProps {
  children?: React.ReactNode;
  border?: boolean;
  className?: string;
}

const Section: React.FC<IProps> = ({
  children,
  border = false,
  className = "",
}) => {
  let classNames = `py-5 px-6 ${className}`;

  if (border) classNames += " m-6 border border-gray-200 rounded-md shadow-sm";

  return <section className={classNames}>{children}</section>;
};

export default Section;
