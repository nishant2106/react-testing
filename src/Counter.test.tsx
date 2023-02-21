import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("handles onClick", () => {
  render(<Counter />);
  const buttonElement = screen.getByText("Add one");
  const divElement = screen.getByRole("contentinfo");
  fireEvent.click(buttonElement);

  expect(divElement).toHaveTextContent("Count is 1");
});
