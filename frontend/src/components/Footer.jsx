import React from "react";
import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
  Link as ChakraLink
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Container maxW={"1440px"}position="fixed" bottom="0" left="0" right="0">
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={"column"}
        gap={1}
      >
       
        <Text
          fontSize={{ base: "15", sm: "20" }}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          Copyright © 2025 Felix. All rights reserved.
        </Text>
      </Flex>
    </Container>
  );
};

export default Footer;
