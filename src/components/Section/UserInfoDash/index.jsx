import React from "react";
import { ContainerBig } from "../../../styles/containerBig";
import { DivInfoContent } from "./styles";

function UserInfoDash({ setOpenModal }) {
  return (
    <ContainerBig>
      <DivInfoContent>
        <h3>Tecnologias</h3>
        <button onClick={() => setOpenModal(true)}>+</button>
      </DivInfoContent>
    </ContainerBig>
  );
}

export default UserInfoDash;
