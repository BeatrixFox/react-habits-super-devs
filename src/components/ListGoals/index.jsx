import { useContext } from "react";
import { GoalsHabitsApiContext } from "../../Providers/goalsHabitsApi/index";
import { Container } from "./style";

export const ListGoals = () => {
  const { goals } = useContext(GoalsHabitsApiContext);
  console.log(goals);
  return (
    <Container>
      {/* {goals.map((goal) => (
        <li key={goal.id}>
          <p>Cardlist {goal}</p>
        </li>
      ))} */}
    </Container>
  );
};

export default ListGoals;
