import { Container, createStyles } from "@mantine/core";
import PropTypes from "prop-types";

const useStyles = createStyles((theme) => ({
  container: {
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: theme.breakpoints.sm,
      width: theme.breakpoints.sm,
      paddingLeft: 39,
      paddingRight: 40,
    },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      maxWidth: theme.breakpoints.lg,
      width: theme.breakpoints.lg,
      paddingLeft: 165,
      paddingRight: 165,
    },
  },
}));

const CustomContainer = ({ children, customProps }) => {
  const { classes } = useStyles();
  return (
    <Container
      sx={(theme) => ({
        width: theme.breakpoints.xs,
        height:"100%"
      })}
      size="xs"
      {...customProps}
      className={classes.container}
    >
      {children}
    </Container>
  );
};

CustomContainer.propTypes = {
  customProps: PropTypes.object,
};

CustomContainer.defaultProps = {
  customProps: {},
};

export default CustomContainer;
