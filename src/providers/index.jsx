import theme from "../styles/theme";
import { ChakraProvider } from "@chakra-ui/react";

const Providers = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Providers;
