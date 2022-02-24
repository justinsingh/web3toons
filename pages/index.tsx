import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { VStack, Text, Center, Link, Box } from '@chakra-ui/react'
const emoji = require("emoji-dictionary");

const Home: NextPage = () => {
  return (
    <Box backgroundColor="yellow.100" minW="100vw" minH={["100vh", "100vh"]}>
      <Center>
        <VStack marginTop={["30vh", "20vh"]} maxW={["75vw"]}>
          <Text fontSize={["7.5vw", "7vw"]}>
            <Link fontWeight={["bold"]} fontStyle="italic" color="purple.400" href="https://twitter.com/ByJustinSingh" isExternal>justin singh</Link>
            {" is figuring out what "}
            <Link fontWeight={["bold"]} fontStyle="italic" color="pink.400" href="https://twitter.com/web3toons" isExternal>web3toons</Link>
            {" is!"}
          </Text>
          <Text fontSize={"6vw"}>ty for your interest {emoji.getUnicode("two_hearts")}</Text>
        </VStack>
      </Center >
    </Box>
  )
}

export default Home
