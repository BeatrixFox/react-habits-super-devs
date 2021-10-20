import { Container } from "./styles";
import HabitsCard from "../../components/HabitsCard/index";
import { HabitsContext } from "../../Providers/Habits/index";
import { useContext } from "react";

const ListHabits = () => {
  const { habits, oneHabit } = useContext(HabitsContext);
  if (oneHabit === []) {
    return (
      <Container>
        {oneHabit?.map((habit) => (
          <li key={habit.id}>
            <HabitsCard item={habit} />
          </li>
        ))}
      </Container>
    );
  } else {
    return (
      <Container>
        {/*{oneHabit?.map((habit) => (*/}
        {oneHabit?.map((habit) => (
          <li key={habit.id}>
            <HabitsCard item={habit} />
          </li>
        ))}
      </Container>
    );
  }
};

export default ListHabits;
