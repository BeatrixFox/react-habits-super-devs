import { Container, Div } from "./styles";
import { useContext, useEffect } from "react";
import Button from "../Button/index";
import { GoalsHabitsApiContext } from "../../Providers/goalsHabitsApi/index";
import { GroupsContext } from "../../Providers/Groups";

const ListGoals = () => {
  const { oneGroup } = useContext(GroupsContext);
  const { goals, deleteGoal, updateGoal, getGoals } = useContext(
    GoalsHabitsApiContext
  );

  useEffect(() => {
    getGoals(oneGroup.id);
  }, []);

  const handleDelete = (goalId) => {
    deleteGoal(goalId);
  };
  const handleUpdate = (goalId) => {
    updateGoal(goalId);
  };

  return (
    <Container>
      <h4>Listar metas do grupo:</h4>
      <ul>
        {goals.map((goal) => {
          return <li key={goal.id}>{goal.title}</li>;
        })}
      </ul>
      <span>{console.log(goals)}</span>
    </Container>
  );
};

export default ListGoals;
