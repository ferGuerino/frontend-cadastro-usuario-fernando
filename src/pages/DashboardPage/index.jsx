import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../api";
import Header from "../../components/Header";
import UserInfoDash from "../../components/Section/UserInfoDash";
import UserProfile from "../../components/Section/UserProfile";
import { ContainerBig } from "../../styles/containerBig";
import { DivHome } from "./styles";

function Dashboard({ userLogout }) {
  const userId = localStorage.getItem("@USERID");
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    async function getUserLoged() {
      try {
        const request = await api.get(`users/${userId}`);
        const response = request.data;
        console.log(response);
        setUserInfo(response);
      } catch (error) {
        console.log(error);
      }
    }
    getUserLoged();
  }, [userId]);

  return (
    <DivHome>
      <ContainerBig>
        <div className="headerContent">
          <Header />
          <button onClick={() => userLogout()}>Sair</button>
        </div>
      </ContainerBig>
      <UserProfile userInfo={userInfo} />
      <UserInfoDash />
    </DivHome>
  );
}

export default Dashboard;

//
//       <h3>{userInfo.email}</h3>
//       <h3>{userInfo.bio}</h3>
//       <h3>{userInfo.contact}</h3>
//       <h3>{userInfo.course_module}</h3>
//
