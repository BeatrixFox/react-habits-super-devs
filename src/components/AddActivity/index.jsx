import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "../Button/index";
import { Container } from "./styles";
import { useContext } from "react";
import { ActivitiesHabitsApiContext } from "../../Providers/activitiesHabitsApi";

// import context provider

export const AddActivity = (groupId) => {
  const { createActivity } = useContext(ActivitiesHabitsApiContext);
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

    createActivity({
      title: userData.title,
      realization_time: `${year}-${month}-${day}T${hour}:${min}`,
      group: groupId,
    });

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
