import { Container } from "./styles";
import { useContext, useEffect } from "react";
import { GoalsHabitsApiContext } from "../../Providers/goalsHabitsApi/index";
import { GroupsContext } from "../../Providers/Groups";
import GoalCard from "../GoalCard/index";
import { Content } from "../ListActivity/styles";

const ListGoals = () => {
  const { oneGroup } = useContext(GroupsContext);
  const { goals, getGoals, updateGoal, deleteGoal } = useContext(
    GoalsHabitsApiContext
  );

  useEffect(() => {
    getGoals(oneGroup.id); // eslint-disable-next-line
  }, [oneGroup.id, updateGoal, deleteGoal]);

  return (
    <Container>
      <h4>Metas</h4>
      <Content>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <GoalCard item={goal} />
            </li>
          );
        })}
      </Content>
    </Container>
  );
};

export default ListGoals;
