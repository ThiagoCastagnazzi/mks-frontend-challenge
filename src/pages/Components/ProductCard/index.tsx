import { Button, Card, Flex, Image, Img, Text } from "@chakra-ui/react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
    updatedAt: string;
  };
  handleAddToCart: (product: any) => void;
}

export default function ProductCard({
  product,
  handleAddToCart,
}: ProductCardProps) {
  return (
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
          <Flex align="center" justify="space-between" width="100%" gap={2}>
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
        <Image src="shopping-bag.svg" alt="Carrinho" width="15px" mr="14px" />
        <Text>COMPRAR</Text>
      </Button>
    </Card>
  );
}
