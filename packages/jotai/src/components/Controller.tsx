import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import countAtom from "atom/countAtom";
import { useAtom } from "jotai";

export default function Controller() {
  const [count, setCount] = useAtom(countAtom);

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
