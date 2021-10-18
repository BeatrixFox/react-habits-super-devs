import Button from "../../components/Button/index";
import { Container } from "./style";
import { useContext } from "react";
import ListHabits from "../../components/ListHabits";
import { HabitsContext } from "../../Providers/Habits/index";
import { Redirect } from "react-router";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";
import AddHabits from "../../components/AddHabits";

export const Habits = () => {
  const { authorized } = useContext(UserHabitsApiContext);
  const { habits } = useContext(HabitsContext);

  const handleClickAddHabit = () => {
    console.log("handleClickAddHabit");
  };
  const handleClickSearch = () => {
    console.log("handleClickSearch");
  };

  if (!authorized) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Container>
        <AddHabits />

        <ListHabits />
        <Button
          handleClick={handleClickAddHabit}
          type="click"
          title="Novos hábitos"
        />
        <Button handleClick={handleClickSearch} type="click" title="Procurar" />
      </Container>
    </>
  );
};

export default Habits;
