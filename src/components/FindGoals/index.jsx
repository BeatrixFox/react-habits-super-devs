import Button from "../Button/index";
import { useContext, useState } from "react";
import { Container } from "./styles";
import { Modal, Box } from "@material-ui/core";
import { GoalsHabitsApiContext } from "../../Providers/goalsHabitsApi";
import ListGoals from "../ListGoals";

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

const FindGoals = ({ groupId }) => {
  const { getGroupGoals } = useContext(GoalsHabitsApiContext);

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
    getGroupGoals(groupId);
  };

  return (
    <Container>
      <Button
        handleClick={handleOpen}
        type={"submit"}
        title={"Listar Metas"}
      ></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ListGoals />
        </Box>
      </Modal>
    </Container>
  );
};

export default FindGoals;
