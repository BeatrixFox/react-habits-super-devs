import Button from "../../components/Button/index";
import { Container } from "./style";
import { useContext } from "react";
import ListHabits from "../../components/ListHabits";
import { HabitsContext } from "../../Providers/Habits/index";
import { Redirect } from "react-router";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";
import AddHabits from "../../components/AddHabits";
import { useEffect } from "react";

export const Habits = () => {
  const { authorized } = useContext(UserHabitsApiContext);
  const { habits, getHabits } = useContext(HabitsContext);

  // console.log(habits);

  useEffect(() => {
    /*habits !== [] &&*/ getHabits();
  }, []);

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
