import { ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import { Controller, CountText } from "components";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducer";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Flex
          height="100vh"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Heading fontSize="100px">Redux</Heading>
          <CountText />
          <Controller />
        </Flex>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
