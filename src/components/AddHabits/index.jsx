import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import Select from "react-select";
import { toast } from "react-toastify";
import Button from "../Button";
import { useContext } from "react";
import { HabitsContext } from "../../Providers/Habits";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";

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
    // const [selectedOptionCategory, setSelectedOptionCategory] = useState();
    // const [selectedOptionLevel, setSelectedOptionLevel] = useState();
    // const [selectedOptionFrequency, setSelectedOptionFrequency] = useState();

    const { setHabits, habits, createHabit } = useContext(HabitsContext)
    const { userId } = useContext(UserHabitsApiContext)
    console.log(userId)
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
        
        // setHabits([...habits, {
        //   title: userData.title,
        //   category: userData.category.value,
        //   difficulty: userData.difficulty.value,
        //   frequency: userData.frequency.value,
        //   achieved: userData.achieved,
        //   how_much_achieved: userData.how_much_achieved,
        //   user: userId
        // }] )
        console.log({
          title: userData.title,
          category: userData.category.value,
          difficulty: userData.difficulty.value,
          frequency: userData.frequency.value,
          achieved: userData.achieved,
          how_much_achieved: userData.how_much_achieved,
          user: userId
        })
        createHabit({
          title: userData.title,
          category: userData.category.value,
          difficulty: userData.difficulty.value,
          frequency: userData.frequency.value,
          achieved: userData.achieved,
          how_much_achieved: userData.how_much_achieved,
          user: userId
        })
        
    };

    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <input placeholder="Nome do novo hábito" {...register("title")} />
            <p>{errors.title?.message}</p>

            <Controller
                name="category"
                control={control}
                render={({ field }) => (
                    <Select {...field} options={optionsCategory} />
                )}
            />
            <p>{errors.category?.message}</p>

            <Controller
                name="difficulty"
                control={control}
                render={({ field }) => (
                    <Select {...field} options={optionsLevel} />
                )}
            />
            <p>{errors.difficulty?.message}</p>

            <Controller
                name="frequency"
                control={control}
                render={({ field }) => (
                    <Select {...field} options={optionsFrequency} />
                )}
            />
            <p>{errors.frequency?.message}</p>           

            <Button title='adicionar' type="submit" />
        </form>
    );
};

export default AddHabits;
