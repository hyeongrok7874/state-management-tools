import countAtom from "atom/countAtom";
import { useAtom } from "jotai";
import { Text } from "@chakra-ui/react";

const CountText = () => {
  const [count, _] = useAtom(countAtom);

  return <Text fontSize="200px">{count}</Text>;
};

export default CountText;
