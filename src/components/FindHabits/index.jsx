import Button from "../Button/index";
import { Modal, TextField, Box } from "@material-ui/core";
import { useContext, useState } from "react";
import { HabitsContext } from "../../Providers/Habits";
import { Container } from "./styles";

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
  p: 4,
};

const FindHabits = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [text, setText] = useState();
  const { getOneHabit, oneHabit } = useContext(HabitsContext);

  const handleClickFinding = (text) => {
    console.log("text: ", text);
    getOneHabit(text);
  };
  console.log("oneHabit: ", oneHabit);
  return (
    <Container>
      <Button title="Procurar hábitos" handleClick={handleOpen}></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Procurar Hábitos</h1>
          <TextField
            fullWidth
            label="Digite sua procura"
            margin="normal"
            variant="filled"
            size="small"
            color="primary"
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            type="click"
            title="Procurar"
            handleClick={() => handleClickFinding(text)}
          />
          <p>CardHabit {oneHabit}</p>
        </Box>
      </Modal>
    </Container>
  );
};

export default FindHabits;
