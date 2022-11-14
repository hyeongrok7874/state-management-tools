import { Button, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setCount } from "action";

export default function Controller() {
  const count = useSelector(
    (state: { counter: { count: number } }) => state.counter.count
  );
  const dispatch = useDispatch();

  return (
    <Flex width="200px" justifyContent="space-between">
      <Button
        size="lg"
        fontSize="30px"
        colorScheme="red"
        onClick={() => dispatch(setCount(count - 1))}
      >
        -1
      </Button>
      <Button
        size="lg"
        fontSize="30px"
        colorScheme="blue"
        onClick={() => dispatch(setCount(count + 1))}
      >
        +1
      </Button>
    </Flex>
  );
}
