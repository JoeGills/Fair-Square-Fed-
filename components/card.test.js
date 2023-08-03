import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./card";
import { MdOutlineSecurity } from "react-icons/md"; // Add this import statement

test("renders Card component correctly", () => {
  // Define the props you want to pass to the Card component
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

  // Check if the icon is rendered correctly (you can check the existence of the icon element)
  expect(container.querySelector(".card span")).toBeInTheDocument();
});
