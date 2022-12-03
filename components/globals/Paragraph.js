import { Text } from "@mantine/core";
import PropTypes from "prop-types";

const Paragraph = ({ body, children, customProps }) => {
  return (
    <Text lh="25px" color="brand.2" fw={500} fz="md" {...customProps}>
      {body || children}
    </Text>
  );
};
Paragraph.propTypes = {
  body: PropTypes.string,
  customProps: PropTypes.object,
};

Paragraph.defaultProps = {
  body: "",
  customProps: {},
};

export default Paragraph;
