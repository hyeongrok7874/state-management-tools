import { useRecoilState } from "recoil";
import countAtom from "atom/countAtom";
import { Text } from "@chakra-ui/react";

const CountText = () => {
  const [count, _] = useRecoilState(countAtom);

  return <Text fontSize="200px">{count}</Text>;
};

export default CountText;
