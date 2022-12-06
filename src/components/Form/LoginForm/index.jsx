import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormStyled } from "./styles";

function LoginForm({ userLogin }) {
  const [loading, setLoading] = useState(false);
  const loginSchema = yup.object().shape({
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
    userLogin(data, setLoading);
  }
  return (
    <FormStyled>
      <h3>Login</h3>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Digite seu Email"
          {...register("email")}
          disabled={loading}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          placeholder="Digite sua Senha"
          {...register("password")}
          disabled={loading}
        />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
      <p>Ainda não possui uma conta?</p>
      <Link className="btnLink" to={"/register"}>
        Cadastre-se
      </Link>
    </FormStyled>
  );
}

export default LoginForm;
