import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";

const customButton = {
  // Subscribe to theme and component params
  styles: (theme, params) => ({
    root: {
      backgroundColor:
        (params.variant === "filled" && `${theme.colors.brand[3]}`) ||
        (params.variant === "outline" && `${theme.colors.brand[0]}`) ||
        (params.variant === "subtle" && `${theme.colors.brand[0]}`),
      color:
        (params.variant === "filled" && `${theme.colors.brand[1]}`) ||
        (params.variant === "outline" && `${theme.colors.brand[2]}`) ||
        (params.variant === "subtle" && `${theme.colors.brand[8]}`),
      "&:hover": {
        backgroundColor:
          (params.variant === "filled" && `${theme.colors.brand[4]}`) ||
          (params.variant === "outline" && `${theme.colors.brand[2]}`) ||
          (params.variant === "subtle" && `${theme.colors.brand[0]}`),
        color: (params.variant === "outline" && `${theme.colors.brand[1]}`) || (params.variant === "subtle" && `${theme.colors.brand[3]}`),
      },
      transition: "all 0.2s linear",
      border: params.variant === "outline" && `1px solid ${theme.colors.brand[2]}`,
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
        colors: {
          brand: ["transparent", "#FFFFFF", "#000000", "#D87D4A", "#FBAF85", "#101010", "#F1F1F1", "#FAFAFA", "rgba(0,0,0,0.5)", "transparent"],
        },
        primaryColor: "brand",
        components: {
          Button: customButton,
        },
        headings: {
          fontFamily: "Manrope, sans-serif;",

          // properties for individual headings, all of them are optional
          sizes: {
            h1: { fontSize: 56, lineHeight: "58px" },
            h2: { fontSize: 40, lineHeight: "44px" },
            h3: { fontSize: 32, lineHeight: "36px" },
            h4: { fontSize: 28, lineHeight: "38px" },
            h5: { fontSize: 24, lineHeight: "33px" },
            h6: { fontSize: 18, lineHeight: "24px" },
          },
        },
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
