import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Button from "../Button";
import { useContext } from "react";
import { HabitsContext } from "../../Providers/Habits";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";

const optionsCategory = [
  { value: "hardSkill", label: "hardSkill" },
  { value: "softSkill", label: "softSkill" },
  { value: "saude", label: "saude" },
];

const optionsLevel = [
  { value: "facil", label: "facil" },
  { value: "medio", label: "medio" },
  { value: "dificil", label: "dificil" },
];

const optionsFrequency = [
  { value: "diaria", label: "diaria" },
  { value: "semanal", label: "semanal" },
  { value: "quinzenal", label: "quinzenal" },
];

export const AddHabits = () => {
  const { createHabit } = useContext(HabitsContext);
  const { userId } = useContext(UserHabitsApiContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    category: yup.object().required("Campo obrigatório"),
    difficulty: yup.object().required("Campo obrigatório"),
    frequency: yup.object().required("Campo obrigatório"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitForm = (userData) => {
    userData.achieved = false;
    userData.how_much_achieved = 30;

    createHabit({
      title: userData.title,
      category: userData.category.value,
      difficulty: userData.difficulty.value,
      frequency: userData.frequency.value,
      achieved: userData.achieved,
      how_much_achieved: userData.how_much_achieved,
      user: userId,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <input placeholder="Nome do novo hábito" {...register("title")} />
      <p>{errors.title?.message}</p>

      <Controller
        name="category"
        control={control}
        render={({ field }) => <Select {...field} options={optionsCategory} />}
      />
      <p>{errors.category?.message}</p>

      <Controller
        name="difficulty"
        control={control}
        render={({ field }) => <Select {...field} options={optionsLevel} />}
      />
      <p>{errors.difficulty?.message}</p>

      <Controller
        name="frequency"
        control={control}
        render={({ field }) => <Select {...field} options={optionsFrequency} />}
      />
      <p>{errors.frequency?.message}</p>

      <Button title="adicionar" type="submit" />
    </form>
  );
};

export default AddHabits;
