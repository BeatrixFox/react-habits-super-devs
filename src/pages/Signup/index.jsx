import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Providers/User";
import Button from "../../components/Button/index";
import { Container } from "./styles";

const Signup = () => {
  const history = useHistory();

  const { userSignup, userSignupSuccess } = useContext(UserContext);

  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    emailConfirm: yup
      .string()
      .required("Campo obrigatório")
      .email("Email invalido")
      .oneOf([yup.ref("email"), null], "Os emails devem ser iguais"),
    password: yup
      .string()
      .min(6, "Min. de 6 caracteres")
      .required("Campo obrigatório")
      .matches(passRegex, "letras e caracteres especiais nescessários"),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitForm = ({ username, email, password }) => {
    const user = { username, email, password };
    userSignup(user);
    history.push("/login");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <input placeholder="Nome de usuário" {...register("username")} />
        <p>{errors.username?.message}</p>

        <input placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>

        <input placeholder="Confirmar email" {...register("emailConfirm")} />
        <p>{errors.emailConfirm?.message}</p>

        <input placeholder="Senha" {...register("password")} />
        <p>{errors.password?.message}</p>

        <input placeholder="Confirmar senha" {...register("passwordConfirm")} />
        <p>{errors.passwordConfirm?.message}</p>

        <Button type="submit" title="Enviar" />
      </form>
    </Container>
  );
};

export default Signup;
