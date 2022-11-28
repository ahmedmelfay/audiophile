import { Text } from "@mantine/core";
import PropTypes from "prop-types";

const Overline = ({ title, children }) => {
  return (
    <Text lh="19px" lts={10} color="brand.3" fw={400} fz="sm" tt="uppercase">
      {title || children}
    </Text>
  );
};

Overline.propTypes = {
  title: PropTypes.string,
};

Overline.defaultProps = {
  title: "",
};

export default Overline;
