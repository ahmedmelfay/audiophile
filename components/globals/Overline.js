import { Text } from "@mantine/core";
import PropTypes from "prop-types";

const Overline = ({ title, children, customProps }) => {
  return (
    <Text {...customProps} lh="19px" lts={10} color="brand.3" fw={400} fz="sm" tt="uppercase">
      {title || children}
    </Text>
  );
};
Overline.propTypes = {
  title: PropTypes.string,
  customProps: PropTypes.object,
};

Overline.defaultProps = {
  title: "",
  customProps: {},
};

export default Overline;
