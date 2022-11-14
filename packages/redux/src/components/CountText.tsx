import { Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const CountText = () => {
  const count = useSelector(
    (state: { counter: { count: number } }) => state.counter.count
  );

  return <Text fontSize="200px">{count}</Text>;
};

export default CountText;
