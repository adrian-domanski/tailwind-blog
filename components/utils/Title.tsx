import React from "react";

interface IProps {
  children?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  fontSize?: "3xl" | "2xl" | "xl";
  textColor?: string;
  weight?: string;
}

const Title: React.FC<IProps> = ({
  children,
  className = "",
  align = "center",
  fontSize = "3xl",
  textColor = "text-gray-700",
  weight = "font-bold",
}) => {
  let classNames = `text-${fontSize} my-5 ${weight} ${textColor} ${className}`;

  if (align === "center") classNames += " text-center";
  if (align === "left") classNames += " text-left";
  return <h1 className={classNames}>{children}</h1>;
};

export default Title;
