import FB from "@/icons/FB";
import Instagram from "@/icons/Instagram";
import Logo from "@/icons/logo";
import Twitter from "@/icons/Twitter";
import { Box, createStyles, Flex, Footer as LayoutFooter, Group } from "@mantine/core";
import Link from "next/link";
import CustomContainer from "../globals/CustomContainer";
import Navigator from "../globals/Navigator";
import Paragraph from "../globals/Paragraph";

const useStyles = createStyles((theme) => ({
  footer: {
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      paddingTop: 60,
      paddingBottom: 46,
    },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      paddingTop: 75,
      paddingBottom: 48,
    },
  },
  footerLine: {
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      left: 0,
      top: -60,
      transform: "none",
    },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      top: -75,
    },
  },
  footerContent: {
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      alignItems: "start",
    },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  footerLinks: {
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      height: "auto",
      flexDirection: "row",
      justifyContent: "start",
      gap: 34,
    },
  },
  footerLinksContainer: {
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      marginTop: 32,
      marginBottom: 32,
    },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      marginTop: 0,
      marginBottom: 0,
    },
  },
  footerText: {
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      textAlign: "left",
      marginBottom: 80,
    },
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      marginTop: 36,
      marginBottom: 56,
      width: 540,
    },
  },
  footerCopy: {
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      marginBottom: 0,
    },
  },
  footerCopyAndSocial: {
    [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
      justifyContent: "space-between",
      width: "100%",
    },
  },
  socialLinks: {
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      marginTop: -63,
    },
  },
}));

const footerLinks = [{ path: "" }, { path: "headphones" }, { path: "speakers" }, { path: "earphones" }];

const Footer = () => {
  const { classes } = useStyles();
  return (
    <LayoutFooter
      className={classes.footer}
      styles={{
        root: { border: 0 },
      }}
      bg={"brand.5"}
      pt={52}
      pb={38}
      pos="relative"
    >
      <CustomContainer>
        <Flex pos={"relative"} className={classes.footerContent} align="center" direction="column" wrap="wrap">
          <Box
            className={classes.footerLine}
            sx={(theme) => ({
              width: 101,
              height: 4,
              backgroundColor: theme.colors.brand[3],
              position: "absolute",
              top: -52,
              left: "50%",
              transform: "translateX(-50%)",
            })}
          />
          <Link href="/">
            <Logo />
          </Link>
          <Box className={classes.footerLinksContainer} component="ul" p={0} my={48}>
            <Flex className={classes.footerLinks} sx={() => ({ height: 148 })} direction="column" align="center" justify="space-between">
              {footerLinks.map((link) => {
                return <Navigator key={link.path} link={link.path} />;
              })}
            </Flex>
          </Box>
          <Paragraph customProps={{ align: "center", color: "white", opacity: 0.5, mb: 48, className: classes.footerText }}>
            Audiophile is an all in one stop to fulfill your audio needs. We&lsquo;re a small team of music lovers and sound specialists who are
            devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&lsquo;re open 7 days a week.
          </Paragraph>
          <Flex className={classes.footerCopyAndSocial} justify="center" wrap="wrap">
            <Paragraph customProps={{ color: "white", opacity: 0.5, mb: 48, fw: 700, className: classes.footerCopy }}>
              Copyright 2021. All Rights Reserved
            </Paragraph>
            <Group className={classes.socialLinks} position="center">
              <FB />
              <Twitter />
              <Instagram />
            </Group>
          </Flex>
        </Flex>
      </CustomContainer>
    </LayoutFooter>
  );
};

export default Footer;
