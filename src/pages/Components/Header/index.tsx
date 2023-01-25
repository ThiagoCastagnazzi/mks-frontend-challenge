import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Logo } from "./Logo";

const Cart = dynamic(() => import("../Cart"), { ssr: false });

export default function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      mx="auto"
      px="6"
      align="center"
      bg="#0F52BA"
    >
      <Flex
        maxW={1480}
        w="100%"
        h="100%"
        mx="auto"
        align="center"
        justify="space-between"
      >
        <Logo />
        <Cart />
      </Flex>
    </Flex>
  );
}
