import { Container, Div } from "./styles";
import { useContext, useEffect } from "react";
import Button from "../Button/index";
import { GoalsHabitsApiContext } from "../../Providers/goalsHabitsApi/index";
import { GroupsContext } from "../../Providers/Groups";
import { Link } from "react-router-dom";
import GoalCard from "../GoalCard/index";
import { Content } from "../ListActivity/styles";

const ListGoals = () => {
  const { oneGroup } = useContext(GroupsContext);
  const { goals, getGoals, updateGoal, deleteGoal } = useContext(
    GoalsHabitsApiContext
  );

  useEffect(() => {
    getGoals(oneGroup.id);
  }, [oneGroup.id, updateGoal, deleteGoal]);

  return (
    <Container>
      <h4>Metas</h4>
      <Content>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <GoalCard item={goal} />
              {/* <button onClick={() => handleClick(goal.id)}>{goal.title}</button> */}
            </li>
          );
        })}
      </Content>
    </Container>
  );
};

export default ListGoals;
