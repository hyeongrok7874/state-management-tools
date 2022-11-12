import React from "react";
import { Provider } from "jotai";
import { ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import { Controller, CountText } from "components";

function App() {
  return (
    <ChakraProvider>
      <Flex
        height="100vh"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Heading fontSize="100px">Jotai</Heading>
        <CountText />
        <Controller />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
