import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

const Signup = () => {
    const history = useHistory();

    const passRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    const schema = yup.object().shape({
        username: yup.string().required("Campo obrigatório"),
        email: yup
            .string()
            .required("Campo obrigatório")
            .email("Email inválido"),
        emailConfirm: yup
            .string()
            .required("Campo obrigatório")
            .email("Email invalido")
            .oneOf([yup.ref("email"), null], "Os emails devem ser iguais"),
        password: yup
            .string()
            .min(6, "Min. de 6 caracteres")
            .required("Campo obrigatório")
            .matches(passRegex, "Senha inválida"),
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

        api.post("/sessions/", user).then((response) => {
            toast.success("Sucesso ao criar a conta");

            return history.push("/login");
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <input placeholder="Nome de usuário" {...register("username")} />
            <p>{errors.username?.message}</p>

            <input placeholder="Email" {...register("email")} />
            <p>{errors.email?.message}</p>

            <input
                placeholder="Confirmar email"
                {...register("emailConfirm")}
            />
            <p>{errors.emailConfirm?.message}</p>

            <input placeholder="Senha" {...register("password")} />
            <p>{errors.password?.message}</p>

            <input
                placeholder="Confirmar senha"
                {...register("passwordConfirm")}
            />
            <p>{errors.passwordConfirm?.message}</p>

            <button type="submit">ADD</button>
        </form>
    );
};

export default Signup;
