import GlobalStyle from "@/styles/resets/createGlobalStyles";

import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <QueryClientProvider client={new QueryClient()}>
        <Component {...pageProps} />
        <GlobalStyle />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
