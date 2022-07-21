import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../Components/App";

describe("Customer forms", () => {
  it("Should correctly set the default option", () => {
    render(<App />);
    userEvent.click(screen.getByTitle("modalBtn"));
    expect(
      screen
        .getByRole("option", { name: "Choose an option" })
        .getAttribute("selected")
    ).toEqual("");
  });

  it("Should log content to console after customer submits form", () => {
    jest.spyOn(console, "log").mockImplementation();
    render(<App />);

    // Open Modal and fill in form.
    userEvent.click(screen.getByTitle("modalBtn"));
    const fName = screen.getByRole("textbox", { name: "Name:" });
    const age = screen.getByRole("spinbutton", { name: "Age:" });

    userEvent.type(fName, "Kevin");
    userEvent.type(age, "24");
    // userEvent.selectOptions(
    //   screen.getByRole("combobox"),
    //   screen.getByRole("option", { name: "Male" })
    // );
    // expect(
    //   screen.getByRole("option", { name: "Male" }).getAttribute("selected")
    // ).toBe(true);
    userEvent.click(screen.getByText("Submit"));
    expect(console.log).toBeCalledWith({
      age: "24",
      gender: "",
      name: "Kevin"
    });
  });
});
