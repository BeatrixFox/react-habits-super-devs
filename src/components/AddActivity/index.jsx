import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { toast } from "react-toastify";
import Button from "../Button/index";
import { Container } from "./styles";

// import context provider

export const AddActivity = () => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitForm = (userData) => {
    const data = new Date();
    let day = data.getDate();
    let month = data.getMonth();
    let hour = data.getHours();
    let year = data.getFullYear();
    let min = data.getMinutes();

    userData.realization_time = `${year}-${month}-${day}T${hour}:${min}Z`;
    userData.group = "user.group";
    console.log("addHabitContext([...habitsContext, userData]");
    toast.success("Habito adicionado com sucesso");
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <input placeholder="Nome do novo hábito" {...register("title")} />
      <p>{errors.title?.message}</p>

      <Button type="submit" title={"Adcionar"}></Button>
    </form>
  );
};

export default AddActivity;
