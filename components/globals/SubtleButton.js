import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mantine/core";
import RightArrow from "@/icons/RightArrow";

const SubtleButton = ({ title, children, customProps }) => {
  return (
    <Button {...customProps} variant="subtle" rightIcon={<RightArrow />}>
      {title || children}
    </Button>
  );
};

SubtleButton.propTypes = {
  title: PropTypes.string,
  customProps: PropTypes.object,
};

SubtleButton.defaultProps = {
  title: "",
  customProps: {},
};

export default SubtleButton;
