import { Div, Container } from "./styles";
import { useState, useContext } from "react";
import { GoalsHabitsApiContext } from "../../Providers/goalsHabitsApi";
import { Modal, Box } from "@material-ui/core";
import Button from "../Button/index";
import AuxButton from "../AuxButton";

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

const GoalCard = ({ item }) => {
  const { getOneGoal, updateGoal, deleteGoal } = useContext(
    GoalsHabitsApiContext
  );

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
    getOneGoal(item.id);
  };

  return (
    <Container key={item.id}>
      <span>Título: {item.title}</span>
      <AuxButton
        handleClick={handleOpen}
        type={"submit"}
        title={"INFO"}
      ></AuxButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p>Título: {item.title}</p>
          <p>Dificuldade: {item.difficulty}</p>
          <p>Estatus: {item.achieved ? "Concluído" : "Não concluido"}</p>
          <Button title="Atualizar" handleClick={() => updateGoal(item.id)} />
          <Button title="delete" handleClick={() => deleteGoal(item.id)} />
        </Box>
      </Modal>
    </Container>
  );
};

export default GoalCard;
