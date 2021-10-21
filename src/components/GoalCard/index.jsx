import { Div, Container } from "./styles";
import { useState, useContext } from "react";
import { GoalsHabitsApiContext } from "../../Providers/goalsHabitsApi";
import { Modal, Box, TextField } from "@material-ui/core";
import Button from "../Button/index";

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
  const { getOneGoal, goal, updateGoal, deleteGoal } = useContext(
    GoalsHabitsApiContext
  );
  //  console.log("goal no GoalCard", goal);
  const [showUpdate, setShowUpdate] = useState(false);
  const [newGoalTitle, setNewGoalTitle] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
    setShowUpdate(false);
    getOneGoal(item.id);
  };

  return (
    <Container key={item.id}>
      <span>{item.title}</span>
      <Div>
        <span>Título: {item.title}</span>
        <Button
          handleClick={handleOpen}
          type={"submit"}
          title={"INFO"}
        ></Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <p>Título: {item.title}</p>
            <p>Dificuldade: {item.difficulty}</p>
            <p>Progresso: {item.how_much_achieved}</p>
            <p>Estatus: {item.achieved}</p>

            {!showUpdate ? (
              <>
                <Button
                  title="Atualizar"
                  handleClick={() => setShowUpdate(!showUpdate)}
                />
                <Button
                  title="delete"
                  handleClick={() => deleteGoal(item.id)}
                />
              </>
            ) : (
              <>
                <TextField
                  fullWidth
                  variant="standard"
                  label="Novo nome"
                  value={newGoalTitle}
                  onChange={(e) => setNewGoalTitle(e.target.value)}
                />

                <Button
                  title="Enviar"
                  handleClick={() => {
                    setOpen(!open);
                    updateGoal(newGoalTitle, item.id);
                  }}
                ></Button>
              </>
            )}
          </Box>
        </Modal>
      </Div>
    </Container>
  );
};

export default GoalCard;
