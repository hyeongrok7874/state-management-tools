import { Button, Flex } from "@chakra-ui/react";
import Context from "../context";
import React, { useContext } from "react";

export default function Controller() {
  const { count, setCount } = useContext(Context);

  return (
    <Flex width="200px" justifyContent="space-between">
      <Button
        size="lg"
        fontSize="30px"
        colorScheme="red"
        onClick={() => setCount && setCount(count - 1)}
      >
        -1
      </Button>
      <Button
        size="lg"
        fontSize="30px"
        colorScheme="blue"
        onClick={() => setCount && setCount(count + 1)}
      >
        +1
      </Button>
    </Flex>
  );
}
