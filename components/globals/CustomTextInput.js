import { theme } from "@/config/theme";
import { TextInput } from "@mantine/core";
import React from "react";
import PropTypes from "prop-types";

const CustomTextInput = ({ value, label, placeholder, customProps, isError }) => {
  return (
    <TextInput
      styles={{
        error: {
          position: "absolute",
          top: "4px",
          fontWeight: "500",
          fontSize: "12px",
          lineHeight: "16px",
          letterSpacing: "-0.214286px",
          right: "0",
          color: theme.colors.brand[9],
        },
        invalid: {
          border: `2px solid ${theme.colors.brand[9]} !important`,
          color: theme.colors.brand[9],
          caretColor: "transparent",
        },
        label: {
          fontWeight: "700",
          fontSize: "12px",
          lineHeight: "16px",
          letterSpacing: "-0.214286px",
          marginBottom: "9px",
          color: isError ? theme.colors.brand[9] : "#000000",
          transition: "all 0.3s linear",
        },
        input: {
          paddingRight: "24px",
          paddingLeft: "24px",
          fontWeight: "700",
          lineHeight: "19px",
          letterSpacing: "-0.25px",
          height: "56px",
          transition: "all 0.3s linear",
          fontSize: 13,
          caretColor: theme.colors.brand[3],
        },
      }}
      value={value}
      //   onChange={(e) => setValue(e.target.value)}
      error={isError}
      className="text-input"
      placeholder={placeholder}
      label={label}
      radius="md"
      {...customProps}
    />
  );
};

CustomTextInput.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  customProps: PropTypes.object,
  isError: PropTypes.any,
};

CustomTextInput.defaultProps = {
    value: "",
    label: "",
    placeholder: "",
    customProps: {},
    isError: false,
};

export default CustomTextInput;
