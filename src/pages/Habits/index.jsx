import Button from "../../components/Button/index";
import { Container } from "./style";
import { useContext } from "react";
import ListHabits from "../../components/ListHabits";
import { HabitsContext } from "../../Providers/Habits/index";
import { Redirect } from "react-router";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";
import AddHabits from "../../components/AddHabits";
import Header from "../../components/Header";

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
      <Header titleMessage="Meus Hábitos" />
      <ListHabits habits={habits} />
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
