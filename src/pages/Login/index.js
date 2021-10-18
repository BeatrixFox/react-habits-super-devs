import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
// import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { useContext, useEffect, useState } from "react";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";
import HeaderMain from "../../components/HeaderMain";

const Login = () => {
  const history = useHistory();

  const [accessToken] = useState(
    JSON.parse(localStorage.getItem("@Habit:access")) || ""
  );

  const { userLogin, userId } = useContext(UserHabitsApiContext);

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

  useEffect(() => {
    if (userId) {
      console.log(userId);
      history.push("/dashboard");
    }
  }, [userLogin]);

  return (
    <>
      <HeaderMain />

      <form onSubmit={handleSubmit(onSubmitForm)}>
        <input placeholder="Nome de usuário" {...register("username")} />
        <p>{errors.username?.message}</p>

        <input placeholder="Senha" {...register("password")} />
        <p>{errors.password?.message}</p>

        <button type="submit">ADD</button>
      </form>
    </>
  );
};

export default Login;
