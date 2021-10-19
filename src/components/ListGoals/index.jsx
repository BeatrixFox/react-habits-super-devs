import { GoalsHabitsApiContext } from "../../Providers/goalsHabitsApi/index";
import { Container } from "./styles";
import { useContext } from "react";

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
