import { Container } from "./styles";
import { useContext } from "react";
import ListHabits from "../../components/ListHabits";
import { HabitsContext } from "../../Providers/Habits/index";
import { Redirect } from "react-router";
import { UserContext } from "../../Providers/User";
import AddHabits from "../../components/AddHabits";
import FindHabits from "../../components/FindHabits/index";

export const Habits = () => {
  const { authorized } = useContext(UserContext);
  const { habits, getHabits } = useContext(HabitsContext);

  // console.log(habits);

  const handleClickAddHabit = () => {
    //Modal para add habits
    console.log("handleClickAddHabit");
  };

  if (!authorized) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Container>
        <FindHabits />
        <ListHabits />
        <AddHabits />
      </Container>
    </>
  );
};

export default Habits;
