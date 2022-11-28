import { theme } from "@/config/theme";
import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={theme}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
