import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../../Components/Modal";
import App from "../../Components/App";

/* In here please contirbute a test that will
verify that your form is logging to the console */

describe("Render homepage with components", () => {
  it("should render homepage", () => {
    render(<App />);
    expect(screen.getByRole("button", { name: "Open" })).toBeTruthy();
    screen.getAllByText("Let’s see a modal");
  });

  it("Should render modal when button is clicked", () => {
    render(<App />);
    userEvent.click(screen.getByTitle("modalBtn"));
    expect(screen.getAllByText("My Modal Data"));
    expect(screen.getAllByRole("heading", { name: "My Modal Data" }));
  });
});
