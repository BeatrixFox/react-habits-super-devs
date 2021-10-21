import { Container, Div } from "./styles";
import { useContext, useEffect } from "react";
import Button from "../Button/index";
import { GoalsHabitsApiContext } from "../../Providers/goalsHabitsApi/index";
import { GroupsContext } from "../../Providers/Groups";
import { Link } from "react-router-dom";
import GoalCard from "../GoalCard/index";

const ListGoals = () => {
  const { oneGroup } = useContext(GroupsContext);
  const { goals, deleteGoal, updateGoal, getGoals } = useContext(
    GoalsHabitsApiContext
  );

  useEffect(() => {
    getGoals(oneGroup.id);
  });

  const handleDelete = (goalId) => {
    deleteGoal(goalId);
  };
  const handleUpdate = (goalId) => {
    updateGoal(goalId);
  };
  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <Container>
      <h4>Listar metas do grupo:</h4>
      <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <GoalCard item={goal} />
              {/* <button onClick={() => handleClick(goal.id)}>{goal.title}</button> */}
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default ListGoals;
