import { ActionIcon, Group, NumberInput, NumberInputHandlers } from "@mantine/core";
import React, { useRef, useState } from "react";

const Amount = () => {
  const [value, setValue] = useState(1);
  const handlers = useRef(NumberInputHandlers);
  return (
    <Group bg="brand.6" spacing={0}>
      <ActionIcon
        className="change-icon-on-hover"
        fz="xs"
        fw={700}
        opacity={0.25}
        style={{ borderRightWidth: 0 }}
        size={40}
        variant="transparent"
        onClick={() => handlers.current.decrement()}
      >
        -
      </ActionIcon>

      <NumberInput
        variant="unstyled"
        hideControls
        value={value}
        onChange={(val) => setValue(val)}
        handlersRef={handlers}
        min={1}
        styles={{
          input: {
            fontSize: 13,
            lineHeight: "18px",
            fontWeight: 700,
            letterSpacing: 1,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            height: 48,
            width: 40,
            textAlign: "center",
          },
        }}
      />

      <ActionIcon
        className="change-icon-on-hover"
        fz="xs"
        fw={700}
        opacity={0.25}
        style={{ borderLeftWidth: 0 }}
        size={40}
        variant="transparent"
        onClick={() => handlers.current.increment()}
      >
        +
      </ActionIcon>
    </Group>
  );
};

export default Amount;
