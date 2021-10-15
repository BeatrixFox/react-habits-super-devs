import Button from "../../components/Button/index";
import { Container } from "./style";

export const Habits = () => {
  const handleClickAddHabit = () => {
    console.log("handleClickAddHabit");
  };
  const handleClickSearch = () => {
    console.log("handleClickSearch");
  };

  return (
    <Container>
      <div>aqui vai map com component com card de hábitos</div>
      <Button
        handleClick={handleClickAddHabit}
        type="onClick"
        title="Novos hábitos"
      />
      <Button handleClick={handleClickSearch} type="onClick" title="Procurar" />
    </Container>
  );
};
