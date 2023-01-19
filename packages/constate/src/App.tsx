import React from "react";
import { ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import { Controller, CountText } from "components";
import { CounterProvider } from "hooks/useCounterContext";

function App() {
  return (
    <CounterProvider>
      <ChakraProvider>
        <Flex
          height="100vh"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Heading fontSize="100px">constate</Heading>
          <CountText />
          <Controller />
        </Flex>
      </ChakraProvider>
    </CounterProvider>
  );
}

export default App;
