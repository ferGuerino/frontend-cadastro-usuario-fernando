import React from "react";
import { ToastContainer } from "react-toastify";
import EditTechForm from "../Form/EditTechForm";
import { DivModal, DivModalBox } from "./styles";

function TechModalEdit({ setOpenModalEdit }) {
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
          <p>Tecnologia Detalhes</p>
          <button onClick={() => setOpenModalEdit(false)}>X</button>
        </header>
        <EditTechForm />
      </DivModalBox>
    </DivModal>
  );
}

export default TechModalEdit;
