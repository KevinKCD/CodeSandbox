import React, { createContext, useState } from "react";

type ModalProviderProps = { children: React.ReactNode };

interface ModalContextInterface {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextInterface | null>(null);

function ModalProvider({ children }: ModalProviderProps) {
  const [modalIsOpen, setIsOpen] = useState(false); //Used to save the state of whether the Modal is Open.

  return (
    <ModalContext.Provider value={{ modalIsOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

function useModal() {
  const context = React.useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

export { ModalProvider, useModal };
