import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mantine/core";
import RightArrow from "@/icons/RightArrow";

const SubtleButton = ({ title, children }) => {
  return (
    <Button variant="subtle" rightIcon={<RightArrow />}>
      {title || children}
    </Button>
  );
};

SubtleButton.propTypes = {
  title: PropTypes.string,
};

SubtleButton.defaultProps = {
  title: "",
};

export default SubtleButton;
