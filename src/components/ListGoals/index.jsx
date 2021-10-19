import { Container } from "./style";
import { useContext } from "react";
import { GoalsHabitsApiContext } from "../../Providers/goalsHabitsApi";

export const ListGoals = () => {
  const { groupedGoals } = useContext(GoalsHabitsApiContext);

  return (
    <Container>
      {groupedGoals.map((goal) => (
        <li key={goal.id}>
          <p>Cardlist {goal}</p>
        </li>
      ))}
    </Container>
  );
};

export default ListGoals;
