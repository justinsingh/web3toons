import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { VStack, Text, Center, Link } from '@chakra-ui/react'
const emoji = require("emoji-dictionary");

const Home: NextPage = () => {
  return (
    <Center>
      <VStack marginTop="30vh">
        <Text fontSize={"4vw"}>
          <Link color="purple.400" href="https://twitter.com/ByJustinSingh" isExternal>justin singh </Link>
          is still figuring out what
          <Link color="pink.400" href="https://twitter.com/web3toons" isExternal> web3toons </Link>
          is
        </Text>
        <Text fontSize={"3vw"}>ty for your interest {emoji.getUnicode("two_hearts")}</Text>
      </VStack>
    </Center >
  )
}

export default Home
