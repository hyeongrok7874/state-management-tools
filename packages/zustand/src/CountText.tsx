import { Text } from "@chakra-ui/react";
import useStore from "./store";

const CountText = () => {
  const { count } = useStore();

  return <Text fontSize="200px">{count}</Text>;
};

export default CountText;
