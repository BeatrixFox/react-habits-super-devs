import { useState, useContext, useEffect } from "react";
import { Modal, TextField, Box } from "@material-ui/core";
import { UserContext } from "../../Providers/User";
import Button from "../Button/index";
import jwtDecode from "jwt-decode";

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

const UpdateUserProfile = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { userProfileUpdate, accessToken } = useContext(UserContext);
  const [newUserName, setNewUserName] = useState("");
  const [decoded, setDecoded] = useState({});

  //const [access] = useState(
  //  JSON.parse(localStorage.getItem("@Habit:access")) || ""
  //);

  useEffect(() => {
    setDecoded(jwtDecode(accessToken));
  }, [accessToken]);

  return (
    <div>
      <Button title="Ataulizar Cadastro" handleClick={handleOpen}></Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Atualizar seu nome de usuário</h1>
          <TextField
            fullWidth
            label="Novo username"
            margin="normal"
            variant="filled"
            size="small"
            color="primary"
            onChange={(e) => setNewUserName(e.target.value)}
          />

          <div>
            <Button
              title="Enviar"
              handleClick={() =>
                userProfileUpdate(newUserName, decoded.user_id)
              }
            ></Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateUserProfile;
