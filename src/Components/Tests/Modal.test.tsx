import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../Components/App";

describe("My modal", () => {
  it("should find the modal button", () => {
    render(<App />);
    expect(screen.getByText(/Open/)).toBeTruthy();
  });

  it("should click Open button to show Modal with content", () => {
    render(<App />);
    userEvent.click(screen.getByTitle("modalBtn"));
    expect(screen.getAllByText("My Modal Data"));
    expect(screen.getAllByRole("heading", { name: "My Modal Data" }));
  });

  it("should close Modal", async () => {
    render(<App />);
    userEvent.click(screen.getByTitle("modalBtn")); //Need to await the userEvent.Click?
    expect(screen.getByText("My Modal Data"));
    userEvent.click(screen.getByText(/Close/i)); //
    expect(screen.queryByText("My Modal Data")).toBeNull();
  });
});
