import React from "react";

interface IProps {
  className?: string;
  children?: React.ReactNode;
  align?: "center" | "left" | "right";
  textColor?: string;
  textSize?: string;
}

const Paragraph: React.FC<IProps> = ({
  className = "",
  children,
  align = "center",
  textColor = "text-gray-700",
  textSize = "text-lg",
}) => {
  return (
    <p className={`${className} text-${align} ${textColor} ${textSize}`}>
      {children}
    </p>
  );
};

export default Paragraph;
