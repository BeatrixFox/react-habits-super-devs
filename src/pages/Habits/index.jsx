import Button from "../../components/Button/index";
import { Container } from "./style";
import { useContext } from "react";
import { HabitsContext } from "../../Providers/Habits/index";
import { Redirect } from "react-router";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";
import AddHabits from "../../components/AddHabits";

export const Habits = () => {
  const { authorized } = useContext(UserHabitsApiContext);
  const { habits } = useContext(HabitsContext);

  console.log(habits);

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
    <Container>
      <div>aqui vai map com component com card de hábitos</div>
      <AddHabits />
      <Button
        handleClick={handleClickAddHabit}
        type="onClick"
        title="Novos hábitos"
      />
      <Button handleClick={handleClickSearch} type="onClick" title="Procurar" />
    </Container>
  );
};

export default Habits;
