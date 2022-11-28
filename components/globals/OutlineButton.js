import { Button } from "@mantine/core";
import PropTypes from "prop-types";
const OutlineButton = ({ title, children }) => {
  return <Button variant="outline">{title || children}</Button>;
};

OutlineButton.propTypes = {
  title: PropTypes.string,
};

OutlineButton.defaultProps = {
  title: "",
};

export default OutlineButton;
