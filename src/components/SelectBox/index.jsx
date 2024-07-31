import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[4px]", // Corrected the value to a valid Tailwind class
};

const variants = {
  blue_gray_0001: "bg-blue_gray-0001 text-white-a700", // Fixed the name and value
};

const sizes = {
  x: "h-[12px] px-1.5 text-[14px]", // Corrected syntax
};

const SelectBox = React.forwardRef(
  (
    { className = "", options = [], isSearchable = false, isMulti = false, indicator, shape, variant = "blue_gray_0001", color = "blue_gray_0001", ...restProps },
    ref
  ) => {
    return (
      <Select
        ref={ref}
        options={options}
        className={` ${className} flex ${shape ? shapes[shape] : ""} ${sizes.x} ${variants[variant] || variants[color] || ""}`}
        isSearchable={isSearchable}
        isMulti={isMulti}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: () => indicator,
        }}
        styles={{
          indicatorContainer: (provided) => ({
            ...provided,
            padding: 0,
            flexShrink: 0,
            width: "auto",
          }),
          container: (provided) => ({
            ...provided,
            alignItems: "center",
          }),
          control: (provided) => ({
            ...provided,
            backgroundColor: "transparent",
            border: "1px solid #ccc",
            boxShadow: "none",
            minHeight: "auto",
            "&:hover": {
              borderColor: "#aaa",
            },
          }),
          input: (provided) => ({
            ...provided,
            color: "inherit",
          }),
          option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? "#000" : "#333",
          }),
          singleValue: (provided) => ({
            ...provided,
            marginLeft: 0,
            marginRight: 0,
          }),
          valueContainer: (provided) => ({
            ...provided,
            padding: 0,
            display: "flex",
            flexDirection: "row",
          }),
          placeholder: (provided) => ({
            ...provided,
            origin: 0,
          }),
          menuPortal: (base) => ({ ...base, zIndex: 100000 }),
        }}
        {...restProps}
      />
    );
  }
);

Selection.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  indicator: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["x"]),
  variant: PropTypes.oneOf(["blue_gray_0001"]),
  color: PropTypes.oneOf(["blue_gray_0001"]),
};

export { SelectBox };
