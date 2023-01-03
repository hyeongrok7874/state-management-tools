import React, { useState } from "react";
import { ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import { Controller, CountText } from "components";
import Context from "./context";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <ChakraProvider>
      <Context.Provider value={{ count, setCount }}>
        <Flex
          height="100vh"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Heading fontSize="100px">Context</Heading>
          <CountText />
          <Controller />
        </Flex>
      </Context.Provider>
    </ChakraProvider>
  );
}

export default App;
