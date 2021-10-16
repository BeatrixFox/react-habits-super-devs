import { Container } from "./style";

export const ListGoals = ({ goals }) => {
  return (
    <Container>
      {goals.map((goal) => (
        <li key={goal.id}>
          <p>Cardlist {goal}</p>
        </li>
      ))}
    </Container>
  );
};

export default ListGoals;
