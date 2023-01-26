import { useProducts } from "../../hooks/useProducts";

import { Box, Flex, Grid, Spinner, Text } from "@chakra-ui/react";

import { useAppDispatch } from "../../store/hooks";
import { addProductCart } from "../../store/cartSlice";

import { toast, ToastContainer } from "react-toastify";
import ProductCard from "../ProductCard";

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
          mb={7}
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
              <ProductCard
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            ))
          )}
        </Grid>
      </Box>
    </Flex>
  );
}
