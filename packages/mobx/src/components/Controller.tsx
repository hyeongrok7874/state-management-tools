import { Button, Flex } from "@chakra-ui/react";
import useStore from "hooks/useStore";
import { observer } from "mobx-react";

export default observer(function Controller() {
  const {
    counter: { decrease, increase },
  } = useStore();

  return (
    <Flex width="200px" justifyContent="space-between">
      <Button size="lg" fontSize="30px" colorScheme="red" onClick={decrease}>
        -1
      </Button>
      <Button size="lg" fontSize="30px" colorScheme="blue" onClick={increase}>
        +1
      </Button>
    </Flex>
  );
});
