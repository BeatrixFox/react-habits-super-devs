import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Providers/User";
import Button from "./../../components/Button/index";

const Login = () => {
  const { userLogin, userId, authorized } = useContext(UserContext);
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Min. de 6 caracteres")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitForm = (userData) => {
    userLogin(userData);
  };

  //useEffect(() => {
  //  if (userId) {
  //    history.push("/dashboard");
  //  }
  //}, [userLogin]);

  if (authorized) {
    history.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <input placeholder="Nome de usuário" {...register("username")} />
      <p>{errors.username?.message}</p>

      <input placeholder="Senha" {...register("password")} />
      <p>{errors.password?.message}</p>

      <Button type="submit" title="Enviar"></Button>
    </form>
  );
};

export default Login;
