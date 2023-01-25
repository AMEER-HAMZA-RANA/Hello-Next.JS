'use client'
import React from "react";
import { ChakraProvider, CSSReset, Button, ButtonGroup, Stack } from "@chakra-ui/react";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ChakraProvider>
      {/* <CSSReset /> */}
      {/* <Component {... pageProps} /> */}
      <h1>hi</h1>
      <Button colorScheme='blue'>Button</Button>
      <Stack spacing={4} direction='row' align='center'>
  <Button colorScheme='teal' size='xs'>
    Button
  </Button>
  <Button colorScheme='teal' size='sm'>
    Button
  </Button>
  <Button colorScheme='teal' size='md'>
    Button
  </Button>
  <Button colorScheme='teal' size='lg'>
    Button
  </Button>
</Stack>
    </ChakraProvider>
  );
}
export default App;