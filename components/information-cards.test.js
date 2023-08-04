import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InformationCards from "./information-cards";

test("renders InformationCards component correctly", () => {
  // Render the InformationCards component
  const { getByText } = render(<InformationCards />);

  // Check if the three cards are rendered with the correct titles, texts, and icons
  expect(getByText("Progress")).toBeInTheDocument();
  expect(
    getByText(
      "We use reliable and ethical methods to collect and analyze data on diversity."
    )
  ).toBeInTheDocument();
  expect(getByText("Equality")).toBeInTheDocument();
  expect(
    getByText(
      "We welcome people of all backgrounds, identities, and perspectives to join our community."
    )
  ).toBeInTheDocument();
  expect(getByText("Security")).toBeInTheDocument();
  expect(
    getByText(
      "We use advanced encryption, authentication, and authorization methods to protect your data."
    )
  ).toBeInTheDocument();
});
