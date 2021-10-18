import Button from "../../components/Button/index";
import { Container } from "./style";
import { useContext } from "react";
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
    <>
      <Header titleMessage="Meus Hábitos" />

      <Container>
        <div>aqui vai map com component com card de hábitos</div>
        <Button
          handleClick={handleClickAddHabit}
          type="onClick"
          title="Novos hábitos"
        />
        <Button
          handleClick={handleClickSearch}
          type="onClick"
          title="Procurar"
        />
      </Container>
    </>
  );
};
