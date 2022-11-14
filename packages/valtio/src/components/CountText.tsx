import { Text } from "@chakra-ui/react";
import { countStore, CountType } from "store/countStore";
import { useSnapshot } from "valtio";

const CountText = () => {
  const { count } = useSnapshot<CountType>(countStore);

  return <Text fontSize="200px">{count}</Text>;
};

export default CountText;
