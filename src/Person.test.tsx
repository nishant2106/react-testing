import React from "react";
import { render, screen } from "@testing-library/react";
import Person from "./Person";

test("render the person", () => {
  render(<Person name="Jack" />);
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toHaveTextContent("Name is Jack");
  expect(divElement).toHaveAttribute("role", "contentinfo");
});
