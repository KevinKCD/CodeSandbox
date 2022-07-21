import React, { useContext } from "react";
//import useAutoFocus from "../Components/Focus";
import { CustomerContext } from "../Context/customerContext";
import { useModal } from "../Context/modalContext";

export default function CustomerForm() {
  const { customer, setCustomer } = useContext(CustomerContext);
  const { setIsOpen } = useModal();
  //const nameInput = useAutoFocus();

  const handleChange = (event: React.SyntheticEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    setCustomer((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(customer);
    setIsOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            id="nameInput"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            id="ageInput"
            type="number"
            name="age"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <select
            name="gender"
            defaultValue={"default"}
            onChange={handleChange}
          >
            <option value={"default"} disabled>
              Choose an option
            </option>
            <option> Male</option>
            <option> Female</option>
            <option> Transgender</option>
            <option> Non-binary</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
