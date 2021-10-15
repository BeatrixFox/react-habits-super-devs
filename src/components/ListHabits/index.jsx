import { Container } from "./style";

export const ListHabits = ({ habits }) => {
  return (
    <Container>
      {habits.map((habit) => (
        <li key={habit.id}>
          <p>CardHabit {habit}</p>
        </li>
      ))}
    </Container>
  );
};

export default ListHabits;
