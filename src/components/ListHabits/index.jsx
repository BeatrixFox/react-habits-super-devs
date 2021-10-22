import { Container } from "./styles";
import HabitsCard from "../../components/HabitsCard/index";
import { HabitsContext } from "../../Providers/Habits/index";
import { useContext } from "react";

const ListHabits = () => {
  const { habits } = useContext(HabitsContext);
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
