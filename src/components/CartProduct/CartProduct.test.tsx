import { render } from "@testing-library/react";
import CartProduct from ".";

const product = {
  id: 1,
  name: "Product 1",
  brand: "Brand 1",
  description: "Description 1",
  photo: "https://via.placeholder.com/150",
  price: 10,
  updatedAt: "2021-08-01T00:00:00.000Z",
  quantity: 1,
  handleDeleProduct: () => {},
  handleIncrement: () => {},
  handleDrecrement: () => {},
};

test("cart product component should render", () => {
  const { debug } = render(
    <CartProduct
      product={product}
      handleDeleProduct={product.handleDeleProduct}
      handleIncrement={product.handleIncrement}
      handleDrecrement={product.handleDrecrement}
    />
  );

  debug();
});
