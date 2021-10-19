import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useContext } from "react";
import Select from "react-select";
import { GoalsHabitsApiContext } from "../../Providers/goalsHabitsApi";
import Button from "../Button/index";
import { Container } from "./styles";
// import context provider

const optionsLevel = [
  { value: "facil", label: "facil" },
  { value: "medio", label: "medio" },
  { value: "dificil", label: "dificil" },
];

export const AddGoals = ({ groupId }) => {
  const { createGoal } = useContext(GoalsHabitsApiContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    difficulty: yup.object().required("Campo obrigatório"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitForm = (userData) => {
    createGoal({
      title: userData.title,
      difficulty: userData.difficulty.value,
      how_much_achieved: 100,
      group: groupId,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <input placeholder="Nome da nova meta" {...register("title")} />
      <p>{errors.title?.message}</p>

      <Controller
        name="difficulty"
        control={control}
        render={({ field }) => <Select {...field} options={optionsLevel} />}
      />

      <Button type="submit" title={"Adcionar"}></Button>
    </form>
  );
};

export default AddGoals;
