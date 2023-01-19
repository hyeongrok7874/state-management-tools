import { Button, Flex } from "@chakra-ui/react";
import { useCounterContext } from "hooks/useCounterContext";

export default function Controller() {
  const { setCount } = useCounterContext();
  return (
    <Flex width="200px" justifyContent="space-between">
      <Button
        size="lg"
        fontSize="30px"
        colorScheme="red"
        onClick={() => setCount((value) => value - 1)}
      >
        -1
      </Button>
      <Button
        size="lg"
        fontSize="30px"
        colorScheme="blue"
        onClick={() => setCount((value) => value + 1)}
      >
        +1
      </Button>
    </Flex>
  );
}
