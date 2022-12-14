import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "../../components/Form/LoginForm";
import Header from "../../components/Header";
import { UserContext } from "../../contexts/UserContext";
import { ContainerSmall } from "../../styles/containerSmall";
import { HeaderContent, H1Load } from "./styles";

function Login() {
  const { userLogin, user, loading } = useContext(UserContext);

  if (loading) {
    return <H1Load>Carregando...</H1Load>;
  }
  return user ? (
    <Navigate to="/home" />
  ) : (
    <ContainerSmall>
      <HeaderContent>
        <Header />
        <LoginForm userLogin={userLogin} />
      </HeaderContent>
    </ContainerSmall>
  );
}

export default Login;
