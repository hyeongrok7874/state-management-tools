import { ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import Controller from "./Controller";
import CountText from "./CountText";

function App() {
  return (
    <ChakraProvider>
      <Flex
        height="100vh"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Heading fontSize="100px">zustand</Heading>
        <CountText />
        <Controller />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
