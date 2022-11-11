import { ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import Controller from "./Controller";
import { RecoilRoot } from "recoil";
import CountText from "./CountText";

function App() {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Flex
          height="100vh"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Heading fontSize="100px">Recoil</Heading>
          <CountText />
          <Controller />
        </Flex>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;
