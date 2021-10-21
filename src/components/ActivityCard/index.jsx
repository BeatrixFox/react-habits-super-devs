import { Div, Container } from "./styles";
import { useState, useContext, useEffect } from "react";
import { ActivitiesHabitsApiContext } from "../../Providers/activitiesHabitsApi";
import { Modal, Box, TextField } from "@material-ui/core";
import Button from "../Button/index";
import AuxButton from "../AuxButton/index";

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

const AtivityCard = ({ item }) => {
  const { getOneActivity, oneActivity, updateActivity, deleteActivity } =
    useContext(ActivitiesHabitsApiContext);

  const [showUpdate, setShowUpdate] = useState(false);
  const [activityDate, setActivitydate] = useState({
    year: "",
    month: "",
    day: "",
  });
  const [newActivityTitle, setNewActivityTitle] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
    setShowUpdate(false);
    getOneActivity(item.id);
  };

  useEffect(() => {
    setActivitydate({
      year: oneActivity.realization_time?.slice(0, 4) || "",
      month: oneActivity.realization_time?.slice(5, 7) + "/" || "",
      day: oneActivity.realization_time?.slice(8, 10) + "/" || "",
    });
  }, [getOneActivity]);

  return (
    <Container key={item.id}>
      <Div>
        <p>Título da Atividade: {item.title}</p>
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
            <p>ID: {oneActivity.id}</p>
            <p>Título: {oneActivity.title}</p>
            <p>
              Data de criação:{" "}
              {activityDate.day + activityDate.month + activityDate.year}
            </p>
            <p>ID do grupo: {oneActivity.group}</p>

            {!showUpdate ? (
              <>
                <Button
                  title="Atualizar"
                  handleClick={() => setShowUpdate(!showUpdate)}
                />
                <Button
                  title="delete"
                  handleClick={() => deleteActivity(oneActivity.id)}
                />
              </>
            ) : (
              <>
                <TextField
                  fullWidth
                  variant="standard"
                  label="Novo nome"
                  value={newActivityTitle}
                  onChange={(e) => setNewActivityTitle(e.target.value)}
                />
                <Button
                  title="Enviar"
                  handleClick={() => {
                    setOpen(!open);
                    updateActivity(newActivityTitle, oneActivity.id);
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

export default AtivityCard;
