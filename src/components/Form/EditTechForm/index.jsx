import React, { useState } from "react";
import { TechFormStyled } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";

function EditTechForm() {
  const { deleteTech } = useContext(TechContext);
  const { editTech, editTechInfo } = useContext(TechContext);
  const [loading, setLoading] = useState(false);
  const techSchema = yup.object().shape({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(techSchema),
  });

  function submit(data) {
    editTech({ status: data.status }, setLoading);
  }
  return (
    <TechFormStyled onSubmit={handleSubmit(submit)}>
      <label htmlFor="name">Nome do projeto</label>
      <input
        type="text"
        placeholder={editTechInfo.title}
        id="title"
        {...register("title")}
        disabled
      />

      <label htmlFor="status">Status</label>
      <select name="" id="status" {...register("status")}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
      <div className="divBtn">
        <button type="submit" className="btnSave">
          Salvar alterações
        </button>
        <button
          onClick={() => deleteTech(editTechInfo.id)}
          type="button"
          className="btnExclude"
        >
          Excluir
        </button>
      </div>
    </TechFormStyled>
  );
}

export default EditTechForm;
