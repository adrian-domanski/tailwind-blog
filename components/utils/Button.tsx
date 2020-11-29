import React from "react";

interface IProps {
  children?: React.ReactNode;
  className?: string;
  as?: "button" | "a" | "span";
}

const Button: React.FC<IProps> = ({
  children,
  className = "",
  as = "button",
}) => {
  const CustomTag = as;
  let classNames = `${className} mx-auto my-4 bg-gradient text-white rounded-full py-2 px-7`;
  if (as === "a") {
    classNames += " table";
  } else {
    classNames += " block";
  }

  return <CustomTag className={classNames}>{children}</CustomTag>;
};

export default Button;
