import { Button, Flex } from "@chakra-ui/react";
import { countStore, setCount, CountType } from "store/countStore";
import { useSnapshot } from "valtio";

export default function Controller() {
  const { count } = useSnapshot<CountType>(countStore);

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
