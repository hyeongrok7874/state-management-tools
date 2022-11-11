import React from "react";
import { ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import { Provider } from "mobx-react";
import { Controller, CountText } from "components";
import CountStore from "store/CountStore";

function App() {
  const counter = new CountStore();

  return (
    <Provider counter={counter}>
      <ChakraProvider>
        <Flex
          height="100vh"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Heading fontSize="100px">MobX</Heading>
          <CountText />
          <Controller />
        </Flex>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
