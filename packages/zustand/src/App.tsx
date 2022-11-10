import useStore from "./store";
import { Text, ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import Controller from "./Controller";

function App() {
  const { count } = useStore();

  return (
    <ChakraProvider>
      <Flex
        height="100vh"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Heading fontSize="100px">zustand</Heading>
        <Text fontSize="200px">{count}</Text>
        <Controller />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
