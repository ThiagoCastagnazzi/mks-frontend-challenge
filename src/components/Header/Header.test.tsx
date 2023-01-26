import { render } from "@testing-library/react";
import Header from ".";

test("Header component should render", () => {
  const { debug } = render(<Header />);

  debug();
});
