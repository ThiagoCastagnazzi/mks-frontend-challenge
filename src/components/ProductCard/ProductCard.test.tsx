import { render } from "@testing-library/react";
import ProductCard from ".";

const product = {
  id: 1,
  name: "Product 1",
  brand: "Brand 1",
  description: "Description 1",
  photo: "https://via.placeholder.com/150",
  price: 10,
  updatedAt: "2021-08-01T00:00:00.000Z",
  quantity: 1,
  handleAddToCart: () => {},
};

test("Product card component should render", () => {
  const { debug } = render(
    <ProductCard product={product} handleAddToCart={product.handleAddToCart} />
  );

  debug();
});
