import React from "react";
import RegisterForm from "../../components/Form/RegisterForm";
import Header from "../../components/Header";
import { ContainerSmall } from "../../styles/containerSmall";
import { Link } from "react-router-dom";
import { HeaderContent } from "./styles";

function Register({ userRegister }) {
  return (
    <ContainerSmall>
      <HeaderContent>
        <Header />
        <Link className="btnBack" to={"/"}>
          Voltar
        </Link>
      </HeaderContent>
      <RegisterForm userRegister={userRegister} />
    </ContainerSmall>
  );
}

export default Register;
