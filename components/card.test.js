import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./card";
import { MdOutlineSecurity } from "react-icons/md";

test("renders Card component correctly", () => {
  const props = {
    icon: <MdOutlineSecurity />,
    title: "Test Title",
    text: "Test Text",
  };

  // Render the Card component with the props
  const { container, getByText } = render(<Card {...props} />);

  // Check if the Card component renders the title and text correctly
  expect(getByText("Test Title")).toBeInTheDocument();
  expect(getByText("Test Text")).toBeInTheDocument();

  // Check if the icon is rendered correctly
  expect(container.querySelector(".card span")).toBeInTheDocument();
});
