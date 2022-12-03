import { ThemeIcon } from "@mantine/core";
import React from "react";

const Icon = (props) => {

  return (
    <ThemeIcon
      sx={(theme) => ({
        color: "white",
        transition: "color 0.3s linear",
        border: 0,
        width: "auto",
        height: "auto",
        backgroundColor: "transparent",
        "&:hover": {
          color: theme.colors.brand[3],
        },
      })}
      {...props}
    >
      {props.children}
    </ThemeIcon>
  );
};

export default Icon;
