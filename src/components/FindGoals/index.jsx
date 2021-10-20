import Button from "../Button/index";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/User";
import { Container, Input } from "./styles";
import { Modal, Box, Paper } from "@material-ui/core";
import { GoalsHabitsApiContext } from "../../Providers/goalsHabitsApi";
import { toast } from "react-toastify";
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

const FindGoals = ({groupId}) => {
    const [text, setText] = useState("");
    const { goalGot, getOneGoal, groupedGoals, getGroupGoals, setGoalGot } = useContext(GoalsHabitsApiContext);

    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => {
        console.log(groupId)
        setOpen(true)
        getGroupGoals(groupId)
        // getOneGoal(groupId)
        // setGoalGot('')
        // console.log(groupedGoals)
        
    };

    // const handlerClickFinding = (text) => {
    // //   console.log(groupedGoals)
    // //     const goals = groupedGoals.goals;
    // //     const oneGoal = goals?.filter((goal) => goal.title === text);
    // //     getGroupGoals(oneGoal?.id);
    
    // console.log(groupId)
    // };

    return (
        <Container>
            <Button
                handleClick={handleOpen}
                type={"submit"}
                title={"Buscar Metas"}
            ></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                {/* <h2>Encontre uma meta</h2>
                    <Input
                        type="text"
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                    />
                    <Button
                        title="Procurar"
                        type="click"
                        handleClick={() => handlerClickFinding(text)}
                    /> */}
                    {/* <h2>Meta encontrada</h2>
                    <p>{goalGot?.title ? `Meta: ${goalGot.title}` : 'Não encontrado' }</p>
                    <p>{goalGot?.difficulty ? `Dificuldade: ${goalGot?.difficulty}` : null}</p>
                    <p>{goalGot?.achieved ? `Alcançado: ${goalGot?.achieved}` : null}</p>
                    <p>{goalGot?.how_much_achieved ? `Quanto alcançou: ${goalGot?.how_much_achieved}` : null }</p>
                    <p>{goalGot?.group ? `Grupo:  ${goalGot?.group}` : null }</p> */}

                    <ListGoals />
                </Box>
            </Modal>
        </Container>
    );
};

export default FindGoals;
