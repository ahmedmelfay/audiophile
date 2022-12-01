import { Title } from "@mantine/core";
import { useEffect, useState } from "react";
import Amount from "./Amount";
import CustomRadioButton from "./CustomRadioButton";
import CustomTextInput from "./CustomTextInput";
import DefButton from "./DefButton";
import OutlineButton from "./OutlineButton";
import Overline from "./Overline";
import Paragraph from "./Paragraph";
import Subtitle from "./Subtitle";
import SubtleButton from "./SubtleButton";

const DesignSysComponentsExample = () => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (!value.match(/^[a-z ,.'-]+$/i) && value !== "") setIsError(true);
    else setIsError(false);
    console.log(isError);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return (
    <>
      <Title order={1}>This is h1 title</Title>
      <Title order={2}>This is h2 title</Title>
      <Title order={3}>This is h3 title</Title>
      <Title order={4}>This is h4 title</Title>
      <Title order={5}>This is h5 title</Title>
      <Title order={6}>This is h6 title</Title>
      <Amount />
      <CustomRadioButton label="e-Payment" checked={checked} customProps={{ onChange: (e) => setChecked(e.currentTarget.value) }} />
      <Paragraph>This is Paragraph (body)</Paragraph>
      <Overline>This is Overline</Overline>
      <Subtitle>This is Subtitle</Subtitle>
      <DefButton>see product</DefButton>
      <SubtleButton>shop</SubtleButton>
      <OutlineButton>see product</OutlineButton>
      <CustomTextInput
        value={value}
        label="Name"
        isError={isError ? "Wrong Format" : isError}
        placeholder="Insert Your Name"
        customProps={{ onChange: (e) => setValue(e.target.value) }}
      />
    </>
  );
};

export default DesignSysComponentsExample;
