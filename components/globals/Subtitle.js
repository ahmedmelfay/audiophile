import { Text } from "@mantine/core";
import PropTypes from "prop-types";

const Subtitle = ({ title, children }) => {
  return (
    <Text lh={"25px"} lts={1} color={"brand.3"} fw={700} fz="xs" tt="uppercase">
      {title || children}
    </Text>
  );
};

Subtitle.propTypes = {
  title: PropTypes.string,
};

Subtitle.defaultProps = {
  title: "",
};

export default Subtitle;
