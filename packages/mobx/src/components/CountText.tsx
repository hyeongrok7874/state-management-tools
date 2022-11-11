import { Text } from "@chakra-ui/react";
import { observer } from "mobx-react";
import useStore from "hooks/useStore";

const CountText = observer(() => {
  const {
    counter: { count },
  } = useStore();

  return <Text fontSize="200px">{count}</Text>;
});

export default CountText;
