import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useContext, useState } from "react";
import Select from "react-select";
import { GoalsHabitsApiContext } from "../../Providers/goalsHabitsApi";
import Button from "../Button/index";
import { Container } from "./styles";
import { toast } from "react-toastify";
import { Modal, Box, TextField } from "@material-ui/core";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #007aff",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const optionsLevel = [
  { value: "facil", label: "facil" },
  { value: "medio", label: "medio" },
  { value: "dificil", label: "dificil" },
];

const AddGoals = ({ groupId }) => {
  const { createGoal } = useContext(GoalsHabitsApiContext);
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    difficulty: yup.object().required("Campo obrigatório"),
  });

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const {
    reset,
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitForm = (userData) => {
    const data = {
      title: userData.title,
      difficulty: userData.difficulty.value,
      how_much_achieved: 0,
      group: groupId,
    };
    createGoal(data);
    setOpen(!open);
    reset();
  };

  return (
    <Container>
      <Button
        handleClick={handleOpen}
        type={"submit"}
        title={"Criar meta"}
      ></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <TextField
              fullWidth
              label="Nome da nova meta"
              margin="normal"
              variant="filled"
              size="small"
              color="primary"
              {...register("title")}
            />
            <p>{errors.title?.message}</p>

            <Controller
              name="difficulty"
              control={control}
              render={({ field }) => (
                <Select {...field} options={optionsLevel} />
              )}
            />

            <Button type="submit" title="Adicionar"></Button>
          </form>
        </Box>
      </Modal>
    </Container>
  );
};

export default AddGoals;
