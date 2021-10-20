import { GoalsHabitsApiContext } from "../../Providers/goalsHabitsApi/index";
import { Container, Div } from "./styles";
import { useContext } from "react";
import Button from "../Button/index";

export const ListGoals = () => {
  const { groupedGoals, deleteGoal, updateGoal } = useContext(
    GoalsHabitsApiContext
  );

  const handleDelete = (goalId) => {
    deleteGoal(goalId);
  };
  const handleUpdate = (goalId) => {
    updateGoal(goalId);
  };

  return (
    <Container>
      <h3>METAS</h3>
      {groupedGoals?.map((goal) => (
        <Div key={goal.id}>
          <p>Meta: {goal.title}</p>
          <p>Dificuldade: {goal.difficulty}</p>
          <p>Status: {goal.how_much_achieved}%</p>
          <p>Meta Atingida: {goal.achieved ? "Sim" : "Não"}</p>
          <Button
            type="onCLick"
            title="delete"
            handleClick={() => handleDelete(goal.id)}
          ></Button>
          <Button
            type="onCLick"
            title="update"
            handleClick={() => handleUpdate(goal.id)}
          ></Button>
        </Div>
      ))}
    </Container>
  );
};

export default ListGoals;
