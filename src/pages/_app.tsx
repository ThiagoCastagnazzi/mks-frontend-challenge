import GlobalStyle from "@/styles/resets/createGlobalStyles";

import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import { store } from "../store/store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <QueryClientProvider client={new QueryClient()}>
          <Component {...pageProps} />
          <GlobalStyle />
        </QueryClientProvider>
      </ChakraProvider>
    </Provider>
  );
}
