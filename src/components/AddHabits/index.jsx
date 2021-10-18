import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import { HabitsContext } from "../../Providers/Habits";
import Button from "../Button/index";
// import context provider

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

  const [selectedOptionCategory, setSelectedOptionCategory] = useState(null);
  const [selectedOptionLevel, setSelectedOptionLevel] = useState(null);
  const [selectedOptionFrequency, setSelectedOptionFrequency] = useState(null);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
    frequency: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitForm = (userData) => {
    userData.achieved = false;
    userData.how_much_achieved = 30;
    userData.user = "user.id";
    createHabit(userData);
    toast.success("Habito adicionado com sucesso");
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <input placeholder="Nome do novo hábito" {...register("title")} />
      <p>{errors.title?.message}</p>

      <Select
        onChange={() => setSelectedOptionCategory()}
        options={optionsCategory}
        value={selectedOptionCategory}
        {...register("category")}
      />

      <Select
        defaultValue={selectedOptionLevel}
        onChange={setSelectedOptionLevel}
        options={optionsLevel}
        {...register("difficulty")}
      />

      <Select
        defaultValue={selectedOptionFrequency}
        onChange={setSelectedOptionFrequency}
        options={optionsFrequency}
        {...register("frequency")}
      />

      <Button type="submit" title={"Adcionar"}></Button>
    </form>
  );
};

export default AddHabits;
