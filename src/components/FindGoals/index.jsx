import Button from "../Button/index";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/User";
import { Container, Input } from "./styles";
import { Modal, Box, Paper } from "@material-ui/core";

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
    p: 2,
};

const FindGoals = (groupedGoals) => {
    const [text, setText] = useState("");
    const { user } = useContext(UserContext);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handlerClickFinding = (text) => {
        const goals = user.group.goals;
        const oneGoal = goals.filter((goal) => goal.title === text);
        groupedGoals(oneGoal.id);
    };

    return (
        <Container>
            <Button
                handleClick={handleOpen}
                type={"submit"}
                title={"Metas"}
            ></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <h2>Encontre uma meta</h2>
                    <Input
                        type="text"
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                    />
                    <Button
                        title="Procurar"
                        type="click"
                        handlerClick={() => handlerClickFinding(text)}
                    />
                </Box>
            </Modal>
        </Container>
    );
};

export default FindGoals;
