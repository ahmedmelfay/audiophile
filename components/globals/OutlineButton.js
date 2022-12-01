import { Button } from "@mantine/core";
import PropTypes from "prop-types";
const OutlineButton = ({ title, children, customProps }) => {
  return (
    <Button {...customProps} variant="outline">
      {title || children}
    </Button>
  );
};
OutlineButton.propTypes = {
  title: PropTypes.string,
  customProps: PropTypes.object,
};

OutlineButton.defaultProps = {
  title: "",
  customProps: {},
};

export default OutlineButton;
