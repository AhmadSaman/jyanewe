import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";
import charkra from "./styles/charkra.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={charkra}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
