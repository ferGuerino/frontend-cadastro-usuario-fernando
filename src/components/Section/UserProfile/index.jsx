import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { ContainerBig } from "../../../styles/containerBig";
import { ProfileContent } from "./styles";

function UserProfile() {
  const { user } = useContext(UserContext);
  return (
    <ProfileContent>
      <ContainerBig>
        <h2>Olá, {user.name}</h2>
        <p>{user.course_module}</p>
      </ContainerBig>
    </ProfileContent>
  );
}

export default UserProfile;
