import React from "react";
import LoginForm from "../../components/Form/LoginForm";
import Header from "../../components/Header";
import { ContainerSmall } from "../../styles/containerSmall";
import { HeaderContent } from "./styles";

function Login({ setUser, userLogin }) {
  return (
    <ContainerSmall>
      <HeaderContent>
        <Header />
        <LoginForm userLogin={userLogin} />
      </HeaderContent>
    </ContainerSmall>
  );
}

export default Login;
