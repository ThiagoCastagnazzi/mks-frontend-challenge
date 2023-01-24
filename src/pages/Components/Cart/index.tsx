import { Flex, Text, Image } from "@chakra-ui/react";

export default function Cart() {
  return (
    <Flex
      alignItems="center"
      justify="space-between"
      w="90px"
      h="45px"
      p="2"
      bg="#fff"
      borderRadius="8px"
      fontWeight="bold"
    >
      <Image src="Cart-Icon.svg" alt="cart" />
      <Text fontSize="16px">0</Text>
    </Flex>
  );
}
