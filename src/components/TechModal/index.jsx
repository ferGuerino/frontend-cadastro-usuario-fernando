import React from "react";
import { ToastContainer } from "react-toastify";
import AddTechForm from "../Form/AddTechForm";
import { DivModal, DivModalBox } from "./styles";

function TechModal({ setOpenModal }) {
  return (
    <DivModal>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <DivModalBox>
        <header>
          <p>Cadastrar Tecnologia</p>
          <button onClick={() => setOpenModal(false)}>X</button>
        </header>
        <AddTechForm />
      </DivModalBox>
    </DivModal>
  );
}

export default TechModal;
