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
  Text,
} from "@chakra-ui/react";

import { useAppDispatch, useAppSelector } from "@/pages/store/hooks";
import {
  clearCart,
  decrementProductCart,
  deleteProductCart,
  incrementProductCart,
} from "@/pages/store/cartSlice";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import CartProduct from "../CartProduct";

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
              <CartProduct
                key={product.id}
                product={product}
                handleIncrement={handleIncrement}
                handleDrecrement={handleDrecrement}
                handleDeleProduct={handleDeleProduct}
              />
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
