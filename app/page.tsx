'use client'
// import styles from './page.module.css'
import Link from 'next/link'
import { ChakraProvider,Button, Container, Stack, CSSReset, Box, Flex, Center} from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
      <Flex justify='space-between' align='center'>
      <Box bg='red' w='200px' h='100px'>THis is a BOX</Box>
      <Box  bg='pink' w='200px' h='50px'>THis is a BOX</Box>
      <Box  bg='yellow' w='200px' h='100px'>THis is a BOX</Box>
      <Box  bg='green' w='200px' h='100px'>THis is a BOX</Box>
      </Flex>
      <Center>
      <Box as='button' borderRadius='md' bg='tomato' color='white' w='100px' h={8}>
  Button
</Box></Center>
<Container maxW='container.sm'>
<Container maxW='2xl' bg='blue.600' centerContent>
  <Box padding='4' bg='blue.400' color='black' maxW='md'>
    There are many benefits to a joint design and development system. Not only
    does it bring benefits to the design team, but it also brings benefits to
    engineering teams. It makes sure that our experiences have a consistent look
    and feel, not just in our design specs, but in production.
  </Box>
</Container>
  
  lifjosijfoi io   jo i j oi joi  io  ijoijo  io  j oij   oij   ooiioj  oijoij ioj oij oijo ij ijijiji ji jijij lifjosijfoi io   jo i j oi joi  io  ijoijo  io  j oij   oij   ooiioj  oijoij ioj oij oijo ij ijijiji ji jijij lifjosijfoi io   jo i j oi joi  io  ijoijo  io  j oij   oij   ooiioj  oijoij ioj oij oijo ij ijijiji ji jijij lifjosijfoi io   jo i j oi joi  io  ijoijo  io  j oij   oij   ooiioj  oijoij ioj oij oijo ij ijijiji ji jijij 
</Container>

    <div>Hello World by AMEER HAMZA RANA</div>
    <h4 style={{color:'white'}}>Navigation</h4>
    <Link href='/abc' style={{color:'blue', textDecoration:'underline'}}>ABC Demo</Link>
    <br></br>
    <Link href='/posts' style={{color:'blue', textDecoration:'underline'}}>Posts</Link>
    <br></br>
    <Link href='/nav' style={{color:'blue', textDecoration:'underline'}}>Nav</Link>
    <br></br>
    <Link href='/posts/[date]/[slug]' as='/posts/2021-01-01/happy-new-year'  style={{color:'blue', textDecoration:'underline'}}>
Read post
</Link>
<br></br>
<Link href='/posts/2021-01-01/happy-new-year'  style={{color:'blue', textDecoration:'underline'}}>
Read post With modern URL
</Link>
<br></br>
{/* <ChakraProvider> */}
      {/* <CSSReset /> */}
      {/* <Component {... pageProps} /> */}
      {/* <h1>hi</h1> */}
      <br></br>
      {/* <Button colorScheme='blue'>Button</Button> */}
      <br></br>
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
    // </ChakraProvider>
    
    )
}


