import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { GoalsHabitsApiContext } from "../../Providers/goalsHabitsApi";
// import context provider

const optionsLevel = [
  { value: "facil", label: "facil" },
  { value: "medio", label: "medio" },
  { value: "dificil", label: "dificil" },
];

export const AddGoals = () => {
  const { createGoal } = useContext(GoalsHabitsApiContext);
  const [selectedOptionLevel, setSelectedOptionLevel] = useState(null);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitForm = (userData) => {
    createGoal(userData.title, userData.difficulty, 100, "group.id");
    toast.success("Habito adicionado com sucesso");
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <input placeholder="Nome da nova meta" {...register("title")} />
      <p>{errors.title?.message}</p>

      <Select
        defaultValue={selectedOptionLevel}
        onChange={setSelectedOptionLevel}
        options={optionsLevel}
        {...register("difficulty")}
      />
      <button type="submit">Adcionar</button>
    </form>
  );
};

export default AddGoals;
