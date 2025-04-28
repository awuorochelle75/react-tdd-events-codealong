import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; // ✅ ADD this import
import App from "../App";

import '@testing-library/jest-dom';

// Code tests here
test("pizza checkbox is initially unchecked", () => {
  render(<App />);
  
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  expect(addPepperoni).not.toBeChecked();
});

test("toppings list initially contains only cheese", () => {
  render(<App />);
  
  expect(screen.getAllByRole("listitem").length).toBe(1);
  expect(screen.getByText("Cheese")).toBeInTheDocument();
  expect(screen.queryByText("Pepperoni")).not.toBeInTheDocument();
});

test("checkbox becomes checked when user clicks it", async () => {
  render(<App />);
  
  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });
  
  await userEvent.click(addPepperoni); // ✅ use await here
  expect(addPepperoni).toBeChecked();
});
