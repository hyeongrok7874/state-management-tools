import { Text } from "@chakra-ui/react";
import Context from "../context";
import React, { useContext } from "react";

const CountText = () => {
  const { count } = useContext(Context);

  return <Text fontSize="200px">{count}</Text>;
};

export default CountText;
