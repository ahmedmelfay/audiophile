import { theme } from "@/config/theme";
import { Radio } from "@mantine/core";
import PropTypes from "prop-types";

const CustomRadioButton = ({ checked, customProps, label }) => {
  return (
    <Radio
      styles={{
        root: { borderRadius: 8, border: "1px solid #CFCFCF", lineHeight: 1 },
        label: { paddingLeft: 16, fontWeight: 700, fontSize: 14, lineHeight: "19px", letterSpacing: -0.25 },
        radio: { backgroundColor: `${theme.colors.brand[1]} !important`, border: `1px solid #CFCFCF !important` },
        icon: { fill: theme.colors.brand[3], color: theme.colors.brand[3], transition: "all 0.1s linear" },
        body: { height: 56, alignItems: "center", padding: "18px 16px" },
        inner: { alignSelf: "center" },
      }}
      checked={checked}
      {...customProps}
      label={label}
    />
  );
};

CustomRadioButton.propTypes = {
  checked: PropTypes.bool,
  customProps: PropTypes.object,
  label: PropTypes.string,
};

CustomRadioButton.defaultProps = {
  checked: false,
  customProps: {},
  label: "",
};

export default CustomRadioButton;
