import React from "react";

const sizes = {
  headingxs: "text-[14px] font-semibold",
  headings: "text-[16px] font-semibold",
  headingmd: "text-[20px] font-bold",
  headinglg: "text-[22px] font-bold",
  headingxl: "text-[30px] font-bold md:text-[28px] sm:text-[26px]",
  heading2x1: "text-[56px] font-semibold md:text-[48px] sm:text-[42px]",
  heading3x1: "text-[72px] font-bold md:text-[48px]",
  texts: "text-[14px] font-medium",
};

const Heading = ({ children, className = "", size = "headingmd", as: Component = "h6", ...restProps }) => {
  return (
    <Component className={`text-white-a700 font-mulish ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
