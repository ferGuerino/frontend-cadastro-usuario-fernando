import React, { useContext } from "react";
import image from "../../asets/trash.svg";
import { TechContext } from "../../contexts/TechContext";
import { ContainerBig } from "../../styles/containerBig";
import { UlTechList } from "./styles";

function Techlist() {
  const { deleteTech, tech, editTest } = useContext(TechContext);

  return (
    <ContainerBig>
      {tech && (
        <UlTechList>
          {tech.map((tech) => {
            return (
              <li key={tech.id}>
                <div className="divLi">
                  <p
                    onClick={() => editTest(tech.id, tech.title, tech.status)}
                    className="title"
                  >
                    {tech.title}
                  </p>
                  <div className="divStatus">
                    <p className="status">{tech.status}</p>
                    <img
                      onClick={() => deleteTech(tech.id)}
                      src={image}
                      alt=""
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </UlTechList>
      )}
    </ContainerBig>
  );
}

export default Techlist;
