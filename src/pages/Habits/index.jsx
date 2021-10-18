import Button from "../../components/Button/index";
import { Container } from "./style";
import { useContext } from "react";
import { HabitsCard } from "../../components/HabitsCard";
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
        {habits.map((item) => (
          <HabitsCard item={item} />
        ))}
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
