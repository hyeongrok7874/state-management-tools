import { Button, Flex } from "@chakra-ui/react";
import useStore from "./store";

export default function Controller() {
  const { count, setCount } = useStore();

  return (
    <Flex width="200px" justifyContent="space-between">
      <Button
        size="lg"
        fontSize="30px"
        colorScheme="red"
        onClick={() => setCount(count - 1)}
      >
        -1
      </Button>
      <Button
        size="lg"
        fontSize="30px"
        colorScheme="blue"
        onClick={() => setCount(count + 1)}
      >
        +1
      </Button>
    </Flex>
  );
}
