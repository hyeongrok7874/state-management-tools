import { Text } from "@chakra-ui/react";
import { useCounterContext } from "hooks/useCounterContext";

const CountText = () => {
  const { count } = useCounterContext();
  return <Text fontSize="200px">{count}</Text>;
};

export default CountText;
