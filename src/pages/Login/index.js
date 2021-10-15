import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

const Signup = () => {
    const history = useHistory();    

    const schema = yup.object().shape({
        username: yup.string().required("Campo obrigatório"),        
        password: yup
            .string()
            .min(6, "Min. de 6 caracteres")
            .required("Campo obrigatório")       
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmitForm = (userData) => {
        
        api.post("/sessions/", userData).then((response) => {

            const { access, user } = response.data

            toast.success("Login efetuadocom sucesso");

            return history.push("/login");
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <input placeholder="Nome de usuário" {...register("username")} />
            <p>{errors.username?.message}</p>

            <input placeholder="Senha" {...register("password")} />
            <p>{errors.password?.message}</p>

            <button type="submit">ADD</button>
        </form>
    );
};

export default Signup;
