import Button from "../../components/Button/index";
import { Container } from "./style";
import { useContext } from "react";
import { HabitsCard } from "../../components/HabitsCard";
import { HabitsContext } from "../../Providers/Habits/index";

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
      {habits.map((item) => (
        <HabitsCard item={item} />
      ))}
      <Button
        handleClick={handleClickAddHabit}
        type="onClick"
        title="Novos hábitos"
      />
      <Button handleClick={handleClickSearch} type="onClick" title="Procurar" />
    </Container>
  );
};
