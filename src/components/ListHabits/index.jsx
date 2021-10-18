import { Container } from "./style";
import HabitsCard from "../../components/HabitsCard/index";

const ListHabits = ({ habits }) => {
  return (
    <Container>
      {habits.map((habit) => (
        <li key={habit.id}>
          <HabitsCard item={habit} />
        </li>
      ))}
    </Container>
  );
};

export default ListHabits;
