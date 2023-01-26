import { render } from "@testing-library/react";
import Footer from ".";

test("Footer component should render", () => {
  const { debug } = render(<Footer />);

  debug();
});
