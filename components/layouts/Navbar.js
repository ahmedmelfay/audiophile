import Logo from "@/icons/logo";
import ShoppingCart from "@/icons/ShoppingCart";
import { Box, Burger, createStyles, Flex, MediaQuery, Navbar as CustomNavbar } from "@mantine/core";
import { useEffect, useState } from "react";
import CustomContainer from "../globals/CustomContainer";
import Navigator from "../globals/Navigator";

const Navbar = (props) => {
  const useStyles = createStyles((theme) => ({
    logo: {
      [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
        marginLeft: 42,
      },
      [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
        marginLeft: "unset",
      },
    },
    navContainer: {
      [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
        justifyContent: "normal",
      },
      [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
        justifyContent: "space-between",
      },
    },
    shoppingCart: {
      [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
        marginLeft: "auto",
      },
      [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
        marginLeft: "unset",
      },
    },
  }));

  const [opened, setOpened] = useState(false);
  const [scrollHeight, setScrollHeight] = useState();

  const { classes } = useStyles();

  const navLinks = [{ path: "" }, { path: "headphones" }, { path: "speakers" }, { path: "earphones" }];

  useEffect(() => {
    window.onscroll = () => {
      setScrollHeight(window.scrollY);
    };
  }, []);

  return (
    <CustomNavbar className={scrollHeight > 150 ? "navbar-sticky" : "navbar-relative"} bg="rgba(0,0,0,0.8)"  height={90} p={0} {...props}>
      <CustomContainer>
        <Flex
          className={classes.navContainer}
          align="center"
          justify="space-between"
          sx={() => ({
            height: "100%",
          })}
        >
          <MediaQuery largerThan="lg" styles={{ display: "none" }}>
            <Burger color="white" opened={opened} onClick={() => setOpened((o) => !o)} title={opened ? "Close navigation" : "Open navigation"} />
          </MediaQuery>
          <Logo className={classes.logo} />
          <MediaQuery smallerThan="lg" styles={{ display: "none" }}>
            <Box className={classes.footerLinksContainer} component="ul" p={0}>
              <Flex className={classes.footerLinks} sx={() => ({ width: 429, gap: 34 })}>
                {navLinks.map((link) => {
                  return <Navigator key={link.path} link={link.path} />;
                })}
              </Flex>
            </Box>
          </MediaQuery>

          <ShoppingCart className={classes.shoppingCart} />
        </Flex>
      </CustomContainer>
    </CustomNavbar>
  );
};

export default Navbar;
