import React from "react";
import { CustomerDetails } from "./App";

//Make an array and havev it map out in the table
interface TableProps {
  customer: CustomerDetails;
}
export default function Table({ customer }: TableProps) {
  return (
    <table title="Customer table" className="center">
      <caption> Data </caption>
      <thead>
        <tr>
          <th id="name" scope="col">
            Name:
          </th>
          <th id="age" scope="col">
            Age:
          </th>
          <th id="Gender" scope="col">
            Gender:
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{customer.name}</td>
          <td>{customer.age}</td>
          <td>{customer.gender}</td>
        </tr>
      </tbody>
    </table>
  );
}
