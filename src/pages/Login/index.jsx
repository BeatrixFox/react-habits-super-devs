import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useContext, useEffect, useState } from "react";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";
import Button from "./../../components/Button/index";
import { Form, Section } from "./styles";

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
      history.push("/dashboard");
    }
  }, [userLogin]);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <input placeholder="Nome de usuário" {...register("username")} />
          <p>{errors.username?.message}</p>

          <input placeholder="Senha" {...register("password")} />
          <p>{errors.password?.message}</p>
        </div>

        <Button type="submit" title="Enviar"></Button>
      </Form>
      <Section>
        <p>Não possui uma conta?</p>
        <Button
          handleClick={() => history.push("/signup")}
          type="click"
          title="Cadastre-se!"
        />
      </Section>
    </>
  );
};

export default Login;
