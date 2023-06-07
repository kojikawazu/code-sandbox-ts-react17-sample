import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./router/Router";
import theme from "./theme/theme";

// Appコンポーネント
export default function App() {
  // コンポーネント返却
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
