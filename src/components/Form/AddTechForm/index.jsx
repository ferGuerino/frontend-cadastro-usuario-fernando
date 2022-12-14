import React, { useState } from "react";
import { TechFormStyled } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";

function AddTechForm() {
  const { createTech } = useContext(TechContext);
  const [loading, setLoading] = useState(false);
  const techSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(techSchema),
  });

  function submit(data) {
    createTech(data, setLoading);
  }
  return (
    <TechFormStyled onSubmit={handleSubmit(submit)}>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        placeholder="Digite o nome da Tecnologia"
        id="title"
        {...register("title")}
        disabled={loading}
      />
      {errors.title && <p className="msgError">{errors.title.message}</p>}
      <label htmlFor="status">Selecionar Status</label>
      <select name="" id="status" {...register("status")}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
      <button className="btnTechForm">Cadastrar Tecnologia</button>
    </TechFormStyled>
  );
}

export default AddTechForm;
