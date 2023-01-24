import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export default function CartModal({ isOpen, onClose, onOpen }: CartModalProps) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size={["xs", "sm", "md"]}
      >
        <DrawerOverlay bg="transparent" />
        <DrawerContent bg="#0F52BA" shadow="2xl">
          <DrawerCloseButton color="#fff" />
          <DrawerHeader color="#fff">Carrinho de Compras</DrawerHeader>

          <DrawerBody>
            <Flex bg="#fff" p={4} borderRadius="8px">
              <Image
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQE53ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_BR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713635480%2C1660927566964%2C1661371886835"
                alt="cart"
                w="50px"
              />

              <Flex align="center" justify="space-between" gap={4}>
                <Text>Apple Watch Series 6</Text>
                <Flex align="center" justify="space-between" gap={2}>
                  <Button>-</Button>
                  <Text>1</Text>
                  <Button>+</Button>
                </Flex>
                <Text>1x R$ 5.999,00</Text>
              </Flex>
            </Flex>
          </DrawerBody>

          <DrawerFooter flexDirection="column">
            <Flex align="center" justify="space-between" w="100%" p={4}>
              <Text fontWeight="bold" color="#fff">
                Total:
              </Text>
              <Text fontWeight="bold" color="#fff">
                R$ 5.999,00
              </Text>
            </Flex>
            <Button colorScheme="gray" w="100%">
              Finalizar Compra
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
