import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../Providers/User";
import Button from "./../../components/Button/index";
import { Form, Section } from "./styles";

const Login = () => {
  const { userLogin, authorized } = useContext(UserContext);
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

  const handleClickReturnSignup = () => {
    history.push("/signup");
  };

  if (authorized) {
    history.push("/dashboard");
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <input placeholder="Nome de usuário*" {...register("username")} />
          <p>{errors.username?.message}</p>

          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>

        <Button type="submit" title="Enviar"></Button>
      </Form>
      <Section>
        <p>Não possui uma conta?</p>
        <Button
          handleClick={handleClickReturnSignup}
          type="click"
          title="Cadastre-se!"
        />
      </Section>
    </>
  );
};

export default Login;
