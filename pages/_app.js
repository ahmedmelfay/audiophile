import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";

const customButton = {
  // Subscribe to theme and component params
  styles: (theme, params) => ({
    root: {
      backgroundColor:
        (params.variant === "filled" && "#D87D4A") ||
        (params.variant === "outline" && "transparent") ||
        (params.variant === "subtle" && "transparent"),
      color:
        (params.variant === "filled" && "#FFFFFF") ||
        (params.variant === "outline" && "#000000") ||
        (params.variant === "subtle" && "rgba(0,0,0,0.5)"),
      "&:hover": {
        backgroundColor:
          (params.variant === "filled" && "#FBAF85") ||
          (params.variant === "outline" && "#000000") ||
          (params.variant === "subtle" && "transparent"),
        color:
          (params.variant === "outline" && "#FFFFFF") ||
          (params.variant === "subtle" && "#D87D4A"),
      },
      transition: "all 0.2s linear",
      border: params.variant === "outline" && "1px solid #000000",
      height: "48px",
      width: "160px",
      fontSize: "13px",
      fontWeight: "700",
      borderRadius: "0px",
      lineHeight: "17.76px",
      textTransform: "uppercase",
    },
  }),
};

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        components: {
          Button: customButton,
        },
        /** Put your mantine theme override here */
        colorScheme: 'light',
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
