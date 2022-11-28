import { Button } from "@mantine/core";
import React from "react";
import PropTypes from "prop-types";

const DefButton = ({ title, children }) => {
  return <Button>{title || children}</Button>;
};

DefButton.propTypes = {
  title: PropTypes.string,
};

DefButton.defaultProps = {
  title: "",
};

export default DefButton;
