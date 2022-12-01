import { Button } from "@mantine/core";
import React from "react";
import PropTypes from "prop-types";

const DefButton = ({ title, children, customProps }) => {
  return <Button {...customProps}>{title || children}</Button>;
};
DefButton.propTypes = {
  title: PropTypes.string,
  customProps: PropTypes.object,
};

DefButton.defaultProps = {
  title: "",
  customProps: {},
};

export default DefButton;
