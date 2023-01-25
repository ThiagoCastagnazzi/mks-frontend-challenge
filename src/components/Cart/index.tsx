import { Flex, Text, Image, useDisclosure } from "@chakra-ui/react";
import { useAppSelector } from "@/store/hooks";
import CartModal from "../CartModal";

export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { itemsQuantity } = useAppSelector((state) => state.cart);

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
      <Text fontSize="16px">{itemsQuantity}</Text>

      <CartModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </Flex>
  );
}
