// Colors used in array ( Based  on design system )
// 0:transparent, 1:#FFFFFF, 2:#000000, 3:#D87D4A, 4:#FBAF85, 5:#101010, 6:#F1F1F1, 7:#FAFAFA, 8:rgba(0,0,0,0.5), 9:#CD2C2C

// Custom buttons based on the variant

const Button = {
  // Subscribe to theme and component params
  styles: (theme, params) => {
    return {
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
        height: 48,
        width: 160,
        fontSize: 13,
        fontWeight: 700,
        borderRadius: 0,
        lineHeight: "17.76px",
        textTransform: "uppercase",
      },
    };
  },
};
const Title = {
  // Subscribe to theme and component params
  styles: (theme, params) => {
    return {
      root: {
        textTransform: "uppercase",
        letterSpacing:
          params.element === "h1" || params.element === "h4"
            ? "2px"
            : (params.element === "h2" && "1.5px") ||
              (params.element === "h3" && "1.15px") ||
              (params.element === "h5" && "1.7px") ||
              (params.element === "h6" && "1.3px"),
      },
    };
  },
};
const Container = {
  defaultProps: {
    sizes: {
      xs: 375,
      sm: 768,
      lg: 1440,
    },
  },
  styles: (theme, params) => {
    return {
      root: {
        paddingLeft: (params.size === "lg" && 165) || (params.size === "sm" && 39) || (params.size === "xs" && 24),
        paddingRight: (params.size === "lg" && 165) || (params.size === "sm" && 40) || (params.size === "xs" && 24),
      },
    };
  },
};

export const theme = {
  fontFamily: "Manrope, sans-serif;",
  fontSizes: {
    xs: 13,
    sm: 14,
    md: 15,
    lg: 16,
    xl: 20,
  },
  colors: {
    brand: ["transparent", "#FFFFFF", "#000000", "#D87D4A", "#FBAF85", "#101010", "#F1F1F1", "#FAFAFA", "rgba(0,0,0,0.5)", "#CD2C2C"],
  },
  primaryColor: "brand",
  components: {
    Button,
    Title,
    Container,
  },
  headings: {
    fontFamily: "Manrope, sans-serif;",
    fontWeight: 700,
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
  breakpoints: {
    xs: 375,
    lg: 1440,
  },
};
