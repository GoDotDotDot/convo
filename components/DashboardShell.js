import React, { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useColorMode, Text, Flex, Heading, Tooltip, chakra } from "@chakra-ui/react";

import { Web3Context } from '@/contexts/Web3Context';
import { isAddress } from 'ethers/lib/utils';
import { TheConvoSpaceIcon, DisconnectIcon, MetaMaskIcon, PortisIcon, WalletConnectIcon, ArgentIcon } from '@/public/icons';

const PageShell = (props) => {

  return (
    <>
      <Head>
            <title>{props.title}</title>
            <meta name='twitter:image' content='https://theconvo.space/images/poster.png' />
            <meta property='og:image' content='https://theconvo.space/images/poster.png' />
      </Head>

      <Flex
        direction="row"
        align="center"
        minW="100vw"
        minH="100vh"
        m="0"
      >
        {props.children}
      </Flex>
    </>
  );
};


const DashboardShell = ({title, children}) => {

    const web3Context = useContext(Web3Context);
    const { connectWallet, signerAddress, disconnectWallet } = web3Context;
    const { colorMode, toggleColorMode } = useColorMode();

    // Not logged in
    if (signerAddress === ""){
        return (
        <PageShell title={`${title} | The Convo Space`}>
            <Flex
                direction="column"
                align="center"
                justifyContent="center"
                maxW="1600px"
                w={{ base: "95%", md: "90%", lg: "90%"}}
                m="0 auto"
                mt={2}
            >
                <Heading as="h3" size="xl" align="center">
                    Let&apos;s start by connecting your <Text bgClip="text" backgroundImage="url('/images/gradient.webp')" backgroundSize="cover">Ethereum Wallet</Text>
                </Heading>
                <br/>
                <Text py={2} cursor="pointer" color={colorMode === 'light' ? "#2d81ff": "#2d81ff"}>
                    What is a wallet?
                </Text>
                <br/>
                <Flex w="100%" direction={{base:"column", md:"row"}} alignItems="center" justifyContent="center">
                    <Flex
                        minHeight="170px"
                        w={{base:"80vw", md:"30vw"}}
                        maxW={{base:"80vw", md:"300px"}}
                        mx={{base:0, md:2}}
                        my={{base:2, md:0}}
                        p={6}
                        direction="column"
                        borderWidth={2}
                        borderColor={colorMode === 'light' ? "#eee": "whiteAlpha.400"}
                        borderRadius={16}
                        cursor="pointer"
                        _hover={{
                            borderColor: colorMode === 'light' ? "blackAlpha.800": "gray.500",
                        }}
                        onClick={()=>{connectWallet('injected')}}
                    >
                        <Flex px={4} py={2} marginTop="-40px" color={colorMode === 'light' ? "white": "black"} background={colorMode === 'light' ? "black": "white"} width="130px" marginLeft="120px" borderRadius="100px">
                            Most Popular
                        </Flex>
                        <MetaMaskIcon py={2} boxSize={10}/>
                        <Text fontSize="xl" mb={2} color={colorMode === "light"? "black": "white"} fontWeight={800}>MetaMask</Text>
                        <Text fontSize="md" color={colorMode === 'light' ? "#4c4c4c": "whiteAlpha.700"}>One of the most Secure and Flexible Wallets.</Text>
                    </Flex>
                    <Flex
                        minHeight="170px"
                        w={{base:"80vw", md:"30vw"}}
                        maxW={{base:"80vw", md:"300px"}}
                        mx={{base:0, md:2}}
                        my={{base:2, md:0}}
                        p={6}
                        direction="column"
                        borderWidth={2}
                        borderColor={colorMode === 'light' ? "#eee": "whiteAlpha.400"}
                        borderRadius={16}
                        cursor="pointer"
                        _hover={{
                            borderColor: colorMode === 'light' ? "blackAlpha.800": "gray.500",
                        }}
                        onClick={()=>{connectWallet('portis')}}
                    >
                        <PortisIcon py={2} boxSize={10}/>
                        <Text fontSize="xl" mb={2} color={colorMode === "light"? "black": "white"} fontWeight={800}>Portis</Text>
                        <Text fontSize="md" color={colorMode === 'light' ? "#4c4c4c": "whiteAlpha.700"}>Connect with your Email and Password.</Text>
                    </Flex>
                    <Flex
                        minHeight="170px"
                        w={{base:"80vw", md:"30vw"}}
                        maxW={{base:"80vw", md:"300px"}}
                        mx={{base:0, md:2}}
                        my={{base:2, md:0}}
                        p={6}
                        pt={4}
                        direction="column"
                        borderWidth={2}
                        borderColor={colorMode === 'light' ? "#eee": "whiteAlpha.400"}
                        borderRadius={16}
                        cursor="pointer"
                        _hover={{
                            borderColor: colorMode === 'light' ? "blackAlpha.800": "gray.500",
                        }}
                        onClick={()=>{connectWallet('walletconnect')}}
                    >
                        <Text py={2}>
                            <WalletConnectIcon boxSize={8} mr={2}/>
                            <chakra.span fontSize="20px" mr={2}>🌈</chakra.span>
                            <ArgentIcon boxSize={6} />
                        </Text>
                        <Text fontSize="xl" mb={2} color={colorMode === "light"? "black": "white"} fontWeight={800}>WalletConnect</Text>
                        <Text fontSize="md" color={colorMode === 'light' ? "#4c4c4c": "whiteAlpha.700"}>Connect with Rainbow, Argent and others</Text>
                    </Flex>
                </Flex>
                <br/>
                <Text  color={colorMode === 'light' ? "#4c4c4c": "whiteAlpha.700"}>
                We do not own your private keys and cannot access your funds without your confirmation.
                </Text>
            </Flex>
        </PageShell>
        )
    }
    else if (isAddress(signerAddress)){
        return (
            <PageShell title={`${title} | The Convo Space`}>
                <Flex
                    direction="column"
                    align="center"
                    w={{base:"64px", md:"100px"}}
                    m="0"
                    height="100vh"
                    position="fixed"
                    top="0"
                    justifyContent="space-between"
                    borderRight="1px"
                    borderRightStyle="solid"
                    borderRightColor={colorMode === "light" ? "blackAlpha.200" : "whiteAlpha.300"}
                    alignItems="space-between"
                    background={colorMode === "light" ? "#ececec30" : "#15151930"}
                >
                    <Flex direction="column">
                        <Link href="/dashboard">
                            <Flex height="75px" w="100%" textTransform="uppercase" fontWeight={200} cursor="pointer" direction="column" align="center" justifyContent="center" alignItems="center" _hover={{backgroundColor:colorMode === "light" ? "#eee" : "blackAlpha.800"}}>
                                <Text fontSize="2xl">
                                    <TheConvoSpaceIcon />
                                </Text>
                            </Flex>
                        </Link>
                        <Link href="/dashboard/comments">
                            <Flex h={{base: "70px", md:"100px"}} w="100%" textTransform="uppercase" fontWeight={200} cursor="pointer" direction="column" align="center" justifyContent="center" alignItems="center" _hover={{backgroundColor:colorMode === "light" ? "#eee" : "blackAlpha.800"}}>
                                <Text fontSize="2xl">
                                    ⚡
                                </Text>
                                <Text mt={1} display={{base:"none", md:"block"}} fontSize="xs">
                                    Comments
                                </Text>
                            </Flex>
                        </Link>
                        <Link href="/dashboard/identity">
                            <Flex h={{base: "70px", md:"100px"}} w="100%" textTransform="uppercase" fontWeight={200} cursor="pointer" direction="column" align="center" justifyContent="center" alignItems="center" _hover={{backgroundColor:colorMode === "light" ? "#eee" : "blackAlpha.800"}}>
                                <Text fontSize="2xl">
                                    🆔
                                </Text>
                                <Text mt={1} display={{base:"none", md:"block"}} fontSize="xs">
                                    Identity
                                </Text>
                            </Flex>
                        </Link>
                        <Link href="/dashboard/data">
                            <Flex h={{base: "70px", md:"100px"}} w="100%" textTransform="uppercase" fontWeight={200} cursor="pointer" direction="column" align="center" justifyContent="center" alignItems="center" _hover={{backgroundColor:colorMode === "light" ? "#eee" : "blackAlpha.800"}}>
                                <Text fontSize="2xl">
                                    📂
                                </Text>
                                <Text mt={1} display={{base:"none", md:"block"}} fontSize="xs">
                                    My Data
                                </Text>
                            </Flex>
                        </Link>
                        <Link href="/dashboard/developer">
                            <Flex h={{base: "70px", md:"100px"}} w="100%" textTransform="uppercase" fontWeight={200} cursor="pointer" direction="column" align="center" justifyContent="center" alignItems="center" _hover={{backgroundColor:colorMode === "light" ? "#eee" : "blackAlpha.800"}}>
                                <Text fontSize="2xl">
                                    🧑‍💻
                                </Text>
                                <Text mt={1} display={{base:"none", md:"block"}} fontSize="xs">
                                    Developer
                                </Text>
                            </Flex>
                        </Link>
                    </Flex>
                    <Flex direction="column">
                        <Flex onClick={toggleColorMode} h={{base: "70px", md:"100px"}} w="100%" textTransform="uppercase" fontWeight={200} cursor="pointer" direction="column" align="center" justifyContent="center" alignItems="center" _hover={{backgroundColor:colorMode === "light" ? "#eee" : "blackAlpha.800"}}>
                            <Text fontSize="2xl">
                                {colorMode === "light" ? "🌒" : "☀️"}
                            </Text>
                            <Text mt={1} display={{base:"none", md:"block"}} fontSize="xs">
                                {colorMode === "light" ? "Dark Mode" : "Light Mode"}
                            </Text>
                        </Flex>

                        <Flex as="a" href="https://docs.theconvo.space" target="_blank" h={{base: "70px", md:"100px"}} w="100%" textTransform="uppercase" fontWeight={200} cursor="pointer" direction="column" align="center" justifyContent="center" alignItems="center" _hover={{backgroundColor:colorMode === "light" ? "#eee" : "blackAlpha.800"}}>
                            <Text fontSize="2xl">
                                📘
                            </Text>
                            <Text mt={1} display={{base:"none", md:"block"}} fontSize="xs">
                                Docs
                            </Text>
                        </Flex>
                    </Flex>

                </Flex>
                <Flex
                    direction="column"
                    w={{base:"calc(100% - 64px)", md:"calc(100% - 100px)"}}
                    minH="100vh"
                    position="relative"
                    left={{base:"64px", md:"100px"}}
                >
                    <Flex
                        as="nav"
                        align="center"
                        w={{base:"calc(100% - 64px)", md:"calc(100% - 100px)"}}
                        p={5}
                        display="flex"
                        position="fixed"
                        background={colorMode === "light" ? "#ececec30" : "#15151930"}
                        backdropFilter="blur(10px)"
                        zIndex="100"
                        borderBottomWidth="1px"
                        height="75px"
                        fontSize="lg"
                        justifyContent="space-between"
                    >
                        <Text>
                            {title}
                        </Text>
                        <Tooltip hasArrow label="Disconnect Wallet" aria-label="Disconnect Wallet" placement="left">
                            <DisconnectIcon onClick={disconnectWallet} cursor="pointer"/>
                        </Tooltip>
                    </Flex>
                    <Flex
                        mt="75px"
                        minH="calc(100vh - 75px)"
                        p={3}
                    >
                      { children }
                    </Flex>
                </Flex>
            </PageShell>
        );
    }
    else {
        return (
            <PageShell title={`${title} | The Convo Space`}>
                <Flex
                    direction="column"
                    align="center"
                    maxW="1600px"
                    w={{ base: "95%", md: "80%", lg: "90%"}}
                    m="0 auto"
                >
                    Whoops! Try Reloading the page.
                </Flex>
            </PageShell>
        );
    }

};

export default DashboardShell;

