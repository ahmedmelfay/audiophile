import { Text } from "@mantine/core";
import PropTypes from "prop-types";

const Paragraph = ({ body, children }) => {
  return (
    <Text lh="25px" color="brand.2" fw={500} fz="md">
      {body || children}
    </Text>
  );
};

Paragraph.propTypes = {
  body: PropTypes.string,
};

Paragraph.defaultProps = {
  body: "",
};

export default Paragraph;

// font-family: 'Manrope';
// font-style: normal;
// font-weight: 500;
// font-size: 15px;
// line-height: 25px;
// /* or 167% */

// color: #000000;
