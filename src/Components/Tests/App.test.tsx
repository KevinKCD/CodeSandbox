import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

/* In here please contirbute a test that will
verify that your form is logging to the console */

describe("Homepage", () => {
  it("should render homepage", () => {
    render(<App />);
    expect(screen.queryByText(/Kevin's Nightmare/)).toBeTruthy(); //expect and tobetruthy may not be needed.
    screen.getAllByTitle("modalBtn");
  });
});
