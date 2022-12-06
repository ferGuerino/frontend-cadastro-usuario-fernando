import React from "react";
import { ContainerBig } from "../../../styles/containerBig";
import { ProfileContent } from "./styles";

function UserProfile({ userInfo }) {
  return (
    <ProfileContent>
      <ContainerBig>
        <h2>Olá, {userInfo.name}</h2>
        <p>{userInfo.course_module}</p>
      </ContainerBig>
    </ProfileContent>
  );
}

export default UserProfile;
