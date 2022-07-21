import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

/* In here please contirbute a test that will
verify that your form is logging to the console */

describe("See if table renders", () => {
  it("should render homepage", () => {
    render(<App />);
    expect(screen.queryByText(/Name:/)).toBeTruthy(); //expect and tobetruthy may not be needed.
    screen.getAllByTitle("Customer table");
  });

  it("Should submit data on form to show in table", () => {
    jest.spyOn(console, "log").mockImplementation();
    render(<App />);

    // Open Modal and fill in form.
    userEvent.click(screen.getByTitle("modalBtn"));
    const fName = screen.getByRole("textbox", { name: "Name:" });
    userEvent.type(fName, "Jim");
    userEvent.click(screen.getByText("Submit"));
    expect(screen.queryByText("Jim")).toBeTruthy(); //expect and tobetruthy may not be needed.
  });
  //Write test to see if data input shows up in table, need to fix the querues first.
});
