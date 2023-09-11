import { Box, Flex, useRadio } from "@chakra-ui/react";

// 1. Create a component that consumes the `useRadio` hook
const RadioCard = (props: any) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Flex
        transition={"all 150ms ease"}
        gap={"1.5"}
        align={"center"}
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "green.600",
          color: "white",
          borderColor: "green.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={4}
        py={2}
        textTransform={"capitalize"}
      >
        {props.icon}
        {props.children}
      </Flex>
    </Box>
  );
};

export default RadioCard;
