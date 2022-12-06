import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormStyled } from "./styles";

function RegisterForm({ userRegister }) {
  const [loading, setLoading] = useState(false);
  const loginSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  function submit(data) {
    userRegister(data, setLoading);
  }
  return (
    <FormStyled>
      <h3>Crie sua conta</h3>
      <p className="subTitle">Rápido e grátis, vamos nessa!</p>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          placeholder="Digite seu Nome"
          {...register("name")}
          disabled={loading}
        />
        {errors.name && <p className="errors">{errors.name.message}</p>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Digite seu Email"
          {...register("email")}
          disabled={loading}
        />
        {errors.email && <p className="errors">{errors.email.message}</p>}

        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          placeholder="Digite sua Senha"
          {...register("password")}
          disabled={loading}
        />
        {errors.password && <p className="errors">{errors.password.message}</p>}

        <label htmlFor="password">Confirmar senha</label>
        <input
          id="password2"
          type="password"
          placeholder="Confirme sua Senha"
          disabled={loading}
        />
        {errors.password && <p className="errors">{errors.password.message}</p>}

        <label htmlFor="bio">Bio</label>
        <input
          id="bio"
          type="text"
          placeholder="Fale sobre você"
          {...register("bio")}
          disabled={loading}
        />
        {errors.bio && <p className="errors">{errors.bio.message}</p>}

        <label htmlFor="contact">Contato</label>
        <input
          id="contact"
          type="text"
          placeholder="Opção de contato"
          {...register("contact")}
          disabled={loading}
        />
        {errors.contact && <p className="errors">{errors.contact.message}</p>}

        <label htmlFor="">Selecionar módulo</label>
        <select id="course_module" {...register("course_module")}>
          <option value="Módulo 1">Módulo 1</option>
          <option value="Módulo 2">Módulo 2</option>
          <option value="Módulo 3">Módulo 3</option>
          <option value="Módulo 4">Módulo 4</option>
          <option value="Módulo 5">Módulo 5</option>
          <option value="Módulo 6">Módulo 6</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>
      </form>
    </FormStyled>
  );
}

export default RegisterForm;
