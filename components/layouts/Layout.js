import { AppShell } from "@mantine/core";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="xs"
      navbar={<Navbar />}
      // header={<Header height={60} p="xs">{/* Header content */}</Header>}
      footer={<Footer />}
      styles={(theme) => ({
        main: {
          // backgroundColor: "black",
          padding: "0px 0px 120px 0px",
          width: "100%",
        },
        body: { flexDirection: "column" },
      })}
    >
      {props.children}
    </AppShell>
  );
};

export default Layout;
