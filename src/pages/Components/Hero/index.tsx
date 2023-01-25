import { useProducts } from "@/pages/hooks/useProducts";

import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Img,
  Spinner,
  Text,
  Image,
} from "@chakra-ui/react";

import { useAppDispatch } from "@/pages/store/hooks";
import { addProductCart } from "@/pages/store/cartSlice";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProductProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  updatedAt: string;
}

export default function Hero() {
  const { data, isFetching, error } = useProducts({
    pageNumber: 1,
    pageRows: 10,
    pageSortBy: "price",
    pageOrderBy: "ASC",
  });

  const dispatch = useAppDispatch();

  const handleAddToCart = (product: ProductProps) => {
    try {
      dispatch(addProductCart(product));

      if (toast.isActive("productAdded")) {
        toast.update("productAdded", {
          render: `Produto adicionado ao carrinho`,
          type: toast.TYPE.SUCCESS,
          autoClose: 3000,
        });
      } else {
        toast.success(`Produto adicionado ao carrinho`, {
          toastId: "productAdded",
        });
      }
    } catch (error) {
      toast.error("Erro ao adicionar produto ao carrinho");
    }
  };

  return (
    <Flex w="100%" my="6" maxWidth={1200} mx="auto" px="6">
      <Box flex="1" borderRadius={8} overflow="auto">
        <ToastContainer position="bottom-center" />
        <Grid
          templateColumns={"repeat(auto-fill, minmax(218px, 1fr))"}
          gap={6}
          mx="auto"
          justifyContent="center"
        >
          {isFetching ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="#fff"
              color="blue.500"
            />
          ) : error ? (
            <Text>Erro ao carregar os dados</Text>
          ) : (
            data?.map((product) => (
              <Card key={product.id} color="black" textAlign="left">
                <Flex
                  bg="#fff"
                  p="4"
                  borderRadius={8}
                  pb="0"
                  direction="column"
                  alignItems="center"
                >
                  <Img
                    src={product.photo}
                    alt={product.name}
                    h="138px"
                    objectFit="cover"
                  />

                  <Flex
                    direction="column"
                    mt="4"
                    mb="4"
                    align="center"
                    justify="space-between"
                    width="100%"
                    gap="4"
                  >
                    <Flex
                      align="center"
                      justify="space-between"
                      width="100%"
                      gap={2}
                    >
                      <Text
                        fontSize="16px"
                        mt="1"
                        fontWeight="600"
                        lineHeight="19px"
                        color="#2C2C2C"
                      >
                        {product.name}
                      </Text>

                      <Text
                        fontSize="15px"
                        fontWeight="700"
                        lineHeight="15px"
                        mt="1"
                        bg="#373737"
                        color="#fff"
                        p="2"
                        borderRadius="md"
                      >
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(product.price)}
                      </Text>
                    </Flex>

                    <Text
                      fontSize="13px"
                      lineHeight="12px"
                      textAlign="left"
                      fontWeight="300"
                    >
                      {product.description}
                    </Text>
                  </Flex>
                </Flex>

                <Button
                  colorScheme="blue"
                  size="sm"
                  mt="auto"
                  width="100%"
                  onClick={() => handleAddToCart(product)}
                  display="flex"
                  alignItems="center"
                >
                  <Image
                    src="shopping-bag.svg"
                    alt="Carrinho"
                    width="15px"
                    mr="14px"
                  />
                  <Text>COMPRAR</Text>
                </Button>
              </Card>
            ))
          )}
        </Grid>
      </Box>
    </Flex>
  );
}
