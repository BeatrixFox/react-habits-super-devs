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
      {/* <Header titleMessage="Meus Hábitos" /> */}
      <Container>
        {/* <div>aqui vai map com component com card de hábitos</div> */}
        <AddHabits />
        <ListHabits habits={habits} />

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
