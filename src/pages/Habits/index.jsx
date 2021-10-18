import Button from "../../components/Button/index";
import { Container } from "./style";
import { useContext } from "react";
import ListHabits from "../../components/ListHabits";
import { HabitsContext } from "../../Providers/Habits/index";
import Header from "../../components/Header";

export const Habits = () => {
  const { habits } = useContext(HabitsContext);
  console.log(habits);

  const handleClickAddHabit = () => {
    console.log("handleClickAddHabit");
  };
  const handleClickSearch = () => {
    console.log("handleClickSearch");
  };

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
