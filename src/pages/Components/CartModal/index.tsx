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
  Grid,
  Image,
  Text,
  Icon,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "@/pages/store/hooks";
import {
  clearCart,
  decrementProductCart,
  deleteProductCart,
  incrementProductCart,
} from "@/pages/store/cartSlice";

import { AiOutlineClose } from "react-icons/ai";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

interface ProductProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  updatedAt: string;
  quantity: number;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cart, totalPrice } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleIncrement = (product: ProductProps) => {
    dispatch(incrementProductCart(product));
  };

  const handleDrecrement = (product: ProductProps) => {
    dispatch(decrementProductCart(product));
  };

  const handleDeleProduct = (product: ProductProps) => {
    dispatch(deleteProductCart(product));
  };

  const handleClearCart = () => {
    if (cart.length > 0) {
      dispatch(clearCart());
      toast.success("Carrinho limpo");
    } else {
      toast.error("Carrinho vazio");
    }
  };

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
          <Grid
            alignItems="center"
            justifyItems="space-between"
            templateColumns="2fr 1fr"
            p={2}
          >
            <DrawerHeader color="#fff" fontSize="27px" lineHeight="33px" mt={4}>
              Carrinho
              <Text fontSize="27px" lineHeight="33px">
                de Compras
              </Text>
            </DrawerHeader>
            <DrawerCloseButton
              display="flex"
              color="#fff"
              position="initial"
              justifySelf="flex-end"
            />
          </Grid>

          <DrawerBody display="flex" flexDirection="column" alignItems="center">
            {cart.map((product: ProductProps) => (
              <Flex
                key={product.id}
                bg="#fff"
                p={4}
                borderRadius="8px"
                gap={6}
                mt={4}
                position="relative"
                direction={["column", "column", "row"]}
              >
                <Icon
                  as={AiOutlineClose}
                  w={6}
                  h={6}
                  p={1}
                  position="absolute"
                  right="-5px"
                  top="-5px"
                  cursor="pointer"
                  onClick={() => handleDeleProduct(product)}
                  borderRadius="50%"
                  bg="black"
                  color="#fff"
                >
                  X
                </Icon>

                <Flex
                  align="center"
                  gap={2}
                  direction={["column", "row", "row"]}
                >
                  <Image
                    src={product.photo}
                    w={["80px", "100px"]}
                    alt={product.name}
                  />
                  <Text
                    fontSize={["16px", "13px"]}
                    fontWeight="400"
                    w={["100%", "100px"]}
                    textAlign={["center", "left"]}
                  >
                    {product.name}
                  </Text>
                </Flex>

                <Flex align="center" justify="space-evenly" gap={4}>
                  <Flex
                    direction="column"
                    align="center"
                    justify="space-evenly"
                    position="relative"
                    gap={2}
                  >
                    <Text
                      fontSize="6px"
                      position="absolute"
                      top="-10px"
                      left="1px"
                    >
                      Qtd:
                    </Text>
                    <Flex
                      align="center"
                      border="1px solid #BFBFBF"
                      borderRadius="8px"
                      gap={2}
                    >
                      <Button
                        bg="#fff"
                        onClick={() => handleDrecrement(product)}
                        borderRight="1px solid #BFBFBF"
                      >
                        -
                      </Button>
                      <Text w="15px" textAlign="center">
                        {product.quantity}
                      </Text>
                      <Button
                        bg="#fff"
                        onClick={() => handleIncrement(product)}
                        borderLeft="1px solid #BFBFBF"
                      >
                        +
                      </Button>
                    </Flex>
                  </Flex>
                  <Flex>
                    <Text fontWeight="bold">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(product.price * product.quantity)}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            ))}
          </DrawerBody>

          <DrawerFooter flexDirection="column">
            <Button colorScheme="red" onClick={handleClearCart}>
              Limpar Carrinho
            </Button>
            <Flex align="center" justify="space-between" w="100%" p={4}>
              <Text fontWeight="bold" color="#fff" fontSize={["20px", "28px"]}>
                Total:
              </Text>
              <Text fontWeight="bold" color="#fff" fontSize={["20px", "28px"]}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(totalPrice)}
              </Text>
            </Flex>
            <Button
              bg="black"
              color="#fff"
              w="100%"
              h="50px"
              fontSize="20px"
              _hover={{
                bg: "gray.300",
                color: "black",
              }}
            >
              Finalizar Compra
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
