import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Button from "../Button";
import { useContext, useState } from "react";
import { HabitsContext } from "../../Providers/Habits";
import { UserContext } from "../../Providers/User";
import { Modal, Box, Paper } from "@material-ui/core";
import { Input, Form } from "./styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: 300,
    sm: 500,
    xl: 600,
  },

  bgcolor: "background.paper",
  border: "2px solid #007aff",
  borderRadius: "10px",
  boxShadow: 24,
  p: {
    xs: 3,
    md: 3,
    sm: 9,
  },
};

const optionsCategory = [
  { value: "hardSkill", label: "HardSkills" },
  { value: "softSkill", label: "SoftSkills" },
  { value: "saude", label: "Saúde" },
];

const optionsLevel = [
  { value: "facil", label: "Fácil" },
  { value: "medio", label: "Médio" },
  { value: "dificil", label: "Difícil" },
];

const optionsFrequency = [
  { value: "diaria", label: "Diária" },
  { value: "semanal", label: "Semanal" },
  { value: "quinzenal", label: "Quinzenal" },
];

export const AddHabits = () => {


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const { createHabit } = useContext(HabitsContext);
  const { userId } = useContext(UserContext);

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
    userData.how_much_achieved = 0;

    createHabit({
      title: userData.title,
      category: userData.category.value,
      difficulty: userData.difficulty.value,
      frequency: userData.frequency.value,
      achieved: userData.achieved,
      how_much_achieved: userData.how_much_achieved,
      user: userId,
    });

    handleClose();
  };

  return (
    <div>
      <Button
        handleClick={handleOpen}
        type={"submit"}
        title={"Novo hábito"}
      ></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form onSubmit={handleSubmit(onSubmitForm)}>
            <h3>ADICIONE UM NOVO HÁBITO</h3>
            <Input placeholder="Nome do novo hábito" {...register("title")} />
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
            <div>
              <Button type={"submit"} title={"adicionar"}></Button>
            </div>
          </Form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddHabits;