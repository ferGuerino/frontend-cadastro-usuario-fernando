import React from "react";
import { H1Styled } from "./styles";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 3000);
  return <H1Styled>Página não encontrada</H1Styled>;
}

export default NotFound;
