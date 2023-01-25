// // pages/_app.js
// import { ChakraProvider } from '@chakra-ui/react'
// // import React from 'react'
// // import { Component } from 'react'
// import { AppProps } from "next/app";
// function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
//   return (
//     <ChakraProvider>
//       <Component {...pageProps} />
//     </ChakraProvider>
//   )
// }

// export default MyApp
'use client'
import React from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { AppProps } from "next/app";
function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ChakraProvider>
      <CSSReset />
      {/* <Component {...pageProps} /> */}
      <h1>HI Posts</h1>
    </ChakraProvider>
  );
}
export default App;

// import { ChakraProvider, Heading } from "@chakra-ui/react";
// import * as React from "react";
// import { render } from "react-dom";
// import "./styles.css";

// function App() {
//   return <Heading>Welcome to Chakra + TypeScript</Heading>;
// }

// const rootElement = document.getElementById("root");
// render(
//   <ChakraProvider>
//     <App />
//   </ChakraProvider>,
//   rootElement
// );

