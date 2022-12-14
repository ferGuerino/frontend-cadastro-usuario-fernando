import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export function TechProvider({ children, setOpenModal, setOpenModalEdit }) {
  const [tech, setTech] = useState([]);
  const [loadingTech, setLoadingTech] = useState(true);
  const { user } = useContext(UserContext);
  const [editTechInfo, setEditTechInfo] = useState({});

  useEffect(() => {
    if (user) setTech(user.techs);
  }, [user]);

  async function createTech(data) {
    const token = localStorage.getItem("@TOKEN");

    try {
      setLoadingTech(true);
      const request = await api.post("users/techs", data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const response = request.data;
      const newTechs = [...tech, response];
      setTech(newTechs);
      toast.success("Tecnologia cadastrada com sucesso!");
      setOpenModal(false);
    } catch (error) {
      console.log(error);
      toast.error("Tecnologia existente");
    } finally {
      setLoadingTech(false);
    }
  }

  function editTest(idTech, titleTech, statusTech) {
    setOpenModalEdit(true);

    setEditTechInfo({
      id: `${idTech}`,
      title: `${titleTech}`,
      status: `${statusTech}`,
    });
  }
  async function editTech(data) {
    const token = localStorage.getItem("@TOKEN");
    const id = editTechInfo.id;

    try {
      setLoadingTech(true);
      const request = await api.put(`users/techs/${id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const response = request.data;
      const filterTechs = tech.filter((item) => {
        return item.id !== id;
      });

      setTech([...filterTechs, response]);
      setOpenModalEdit(false);
      toast.success("Tecnologia atualizada com sucesso!");
    } catch (error) {
      toast.error("Ops, aconteceu algo errado");
    } finally {
      setLoadingTech(false);
    }
  }

  async function deleteTech(id) {
    const token = localStorage.getItem("@TOKEN");
    try {
      setLoadingTech(true);
      await api.delete(`users/techs/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      const newTechs = tech.filter((iten) => {
        return iten.id !== id;
      });
      setTech(newTechs);
      toast.success("Tecnologia deletada com sucesso!");
      setOpenModalEdit(false);
    } catch (error) {
    } finally {
      setLoadingTech(false);
    }
  }

  return (
    <TechContext.Provider
      value={{
        createTech,
        tech,
        setTech,
        loadingTech,
        setLoadingTech,
        deleteTech,
        editTest,
        editTech,
        editTechInfo,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
