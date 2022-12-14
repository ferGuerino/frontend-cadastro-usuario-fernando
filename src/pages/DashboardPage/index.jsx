import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "../../components/Header";
import UserInfoDash from "../../components/Section/UserInfoDash";
import UserProfile from "../../components/Section/UserProfile";
import Techlist from "../../components/TechList";
import TechModal from "../../components/TechModal";
import TechModalEdit from "../../components/TechModalEdit";
import { TechProvider } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";
import { ContainerBig } from "../../styles/containerBig";
import { DivHome } from "./styles";

function Dashboard() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const { user, loading, userLogout } = useContext(UserContext);

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return user ? (
    <DivHome>
      <ContainerBig>
        <div className="headerContent">
          <Header />
          <button onClick={() => userLogout()}>Sair</button>
        </div>
      </ContainerBig>
      <UserProfile />
      <UserInfoDash setOpenModal={setOpenModal} />
      <TechProvider
        setOpenModal={setOpenModal}
        setOpenModalEdit={setOpenModalEdit}
      >
        <Techlist setOpenModalEdit={setOpenModalEdit} />
        {openModal && <TechModal setOpenModal={setOpenModal} />}
        {openModalEdit && <TechModalEdit setOpenModalEdit={setOpenModalEdit} />}
      </TechProvider>
    </DivHome>
  ) : (
    <Navigate to="/" />
  );
}

export default Dashboard;
