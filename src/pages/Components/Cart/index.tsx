import { Flex, Text, Image, useDisclosure } from "@chakra-ui/react";
import CartModal from "../CartModal";

export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="button"
      alignItems="center"
      justify="space-around"
      w="90px"
      h="45px"
      p="2"
      bg="#fff"
      borderRadius="8px"
      fontWeight="bold"
      onClick={onOpen}
    >
      <Image src="Cart-Icon.svg" alt="cart" />
      <Text fontSize="16px">0</Text>

      <CartModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </Flex>
  );
}
