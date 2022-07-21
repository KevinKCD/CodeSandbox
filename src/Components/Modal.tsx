import React from "react";
import { useModal } from "../Context/modalContext";

type ModalTypes = {
  // modalIsOpen: boolean;
  // Close: () => void;
  children?: JSX.Element;
};

export default function Modal({ children }: ModalTypes) {
  const { modalIsOpen, setIsOpen } = useModal();
  if (!modalIsOpen) {
    return null; // If Modal is not open then it returns nothing, else return the modal
  }

  return (
    <div className="Modal">
      <div className="ModalContent">
        <title> Modal</title>
        <header className="ModalHeader">
          <h1> My Modal Data</h1>
        </header>
        <div className="ModalBody">{children}</div>
        <footer className="ModalFooter">
          <button title="Close" type="button" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
}
