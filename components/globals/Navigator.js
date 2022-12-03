import { Text } from "@mantine/core";
import Link from "next/link";
import PropTypes from "prop-types";

const Navigator = ({ link, customProps }) => {
  return (
    <li>
      <Link href={link ? link : "/"}>
        <Text
          sx={(theme) => ({
            transition: "color 0.3s linear",
            "&:hover": {
              color: theme.colors.brand[3],
            },
          })}
          color="white"
          fz="xs"
          lts={2}
          lh="25px"
          tt="uppercase"
          fw={700}
          {...customProps}
        >
          {link ? link : "home"}
        </Text>
      </Link>
    </li>
  );
};

Navigator.propTypes = {
  customProps: PropTypes.object,
  link: PropTypes.string,
};

Navigator.defaultProps = {
  customProps: {},
};
export default Navigator;
