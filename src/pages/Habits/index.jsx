import Button from "../../components/Button/index";
import { Container } from "./styles";
import { useContext } from "react";
import ListHabits from "../../components/ListHabits";
import { HabitsContext } from "../../Providers/Habits/index";
import { Redirect } from "react-router";
import { UserContext } from "../../Providers/User";
import AddHabits from "../../components/AddHabits";
import { useEffect } from "react";

export const Habits = () => {
  const { authorized } = useContext(UserContext);
  const { habits, getHabits } = useContext(HabitsContext);

  // console.log(habits);

  const handleClickAddHabit = () => {
    //Modal para add habits
    console.log("handleClickAddHabit");
  };
  const handleClickSearch = () => {
    //Modal para procurar habito
    console.log("handleClickSearch");
  };

  if (!authorized) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Container>
        <ListHabits />
        <AddHabits />
        <Button handleClick={handleClickSearch} type="click" title="Procurar" />
      </Container>
    </>
  );
};

export default Habits;
