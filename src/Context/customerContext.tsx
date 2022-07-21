import React, { createContext, useState } from "react";

type ChildrenProviderProps = { children: React.ReactNode };

export interface CustomerContextInterface {
  customer: CustomerDetails;
  setCustomer: React.Dispatch<React.SetStateAction<CustomerDetails>>;
}

export interface CustomerDetails {
  name: string;
  age: string;
  gender: string;
}

export const CustomerContext = createContext<CustomerContextInterface | null>(
  null
);

export function CustomerProvider({ children }: ChildrenProviderProps) {
  const [customer, setCustomer] = useState({
    name: "",
    age: "",
    gender: ""
  });

  return (
    <CustomerContext.Provider value={{ customer, setCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
}
