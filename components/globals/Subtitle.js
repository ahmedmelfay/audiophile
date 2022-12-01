import { Text } from "@mantine/core";
import PropTypes from "prop-types";

const Subtitle = ({ title, children, customProps }) => {
  return (
    <Text {...customProps} lh={"25px"} lts={1} color={"brand.3"} fw={700} fz="xs" tt="uppercase">
      {title || children}
    </Text>
  );
};

Subtitle.propTypes = {
  title: PropTypes.string,
  customProps: PropTypes.object,
};

Subtitle.defaultProps = {
  title: "",
  customProps: {},
};

export default Subtitle;
