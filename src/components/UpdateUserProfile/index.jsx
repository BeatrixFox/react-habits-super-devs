import { useState, useContext } from "react";
import { Button, Modal, TextField, Box } from "@material-ui/core";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";
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
    p: {
        xs: 1,
        sm: 9,
    },
};

const UpdateUserProfile = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { userProfileUpdate } = useContext(UserHabitsApiContext);
    const [newUserName, setNewUserName] = useState("");

    const [access] = useState(
        JSON.parse(localStorage.getItem("@Habit:access")) || ""
    );

    const decoded = jwtDecode(access);

    return (
        <div>
            <Button onClick={handleOpen}>UPDATE PROFILE</Button>
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
                            fullWidth
                            color="primary"
                            variant="contained"
                            onClick={() =>
                                userProfileUpdate(newUserName, decoded.user_id)
                            }
                        >
                            ENVIAR
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default UpdateUserProfile;
