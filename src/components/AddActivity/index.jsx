import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "../Button/index";
import { Container } from "./styles";
import { useContext, useState } from "react";
import { ActivitiesHabitsApiContext } from "../../Providers/activitiesHabitsApi";
import { Modal, Box } from "@material-ui/core";

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

export const AddActivity = ({ groupId }) => {
  const { createActivity } = useContext(ActivitiesHabitsApiContext);
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
  });

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitForm = (userData) => {
    const data = new Date();
    let day = data.getDate();
    let month = data.getMonth() + 1;
    let hour = data.getHours();
    let year = data.getFullYear();
    let min = data.getMinutes();

    createActivity(
      userData.title,
      `${year}-${month}-${day}T${hour}:${min}Z`,
      groupId
    );
    setOpen(!open);
    toast.success("Atividade adicionada com sucesso");
  };

  return (
    <Container>
      <Button
        handleClick={handleOpen}
        type={"submit"}
        title={"Criar atividade"}
      ></Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <input placeholder="Nome Atividade" {...register("title")} />
            <p>{errors.title?.message}</p>

            <Button type="submit" title="Adcionar"></Button>
          </form>
        </Box>
      </Modal>
    </Container>
  );
};

export default AddActivity;
