import Layout from "@/components/layouts/Layout";
import { theme } from "@/config/theme";
import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}

export default MyApp;
