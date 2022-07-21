import React, { useContext } from "react";
import { useModal } from "../Context/modalContext";
import { CustomerContext } from "../Context/customerContext";
import Modal from "../Components/Modal";
import CustomerForm from "../Components/CustomerForm";
import Table from "../Components/Table";

export default function Home() {
  const { setIsOpen } = useModal();
  const { customer } = useContext(CustomerContext);

  return (
    <>
      <h2>Let’s see a modal</h2>
      <button
        className="center"
        title="modalBtn"
        onClick={() => setIsOpen(true)}
      >
        Open
      </button>
      <Modal>
        <CustomerForm />
      </Modal>
      <br />
      <Table customer={customer} />
    </>
  );
}
