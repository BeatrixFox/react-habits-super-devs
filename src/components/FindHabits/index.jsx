import Button from "../Button/index";
import { useContext, useState } from "react";
import { HabitsContext } from "../../Providers/Habits";
import { Container } from "./styles";

const FindHabits = () => {
  const [text, setText] = useState("");
  const { getOneHabit, oneHabit } = useContext(HabitsContext);

  const handlerClickFinding = (text) => {
    getOneHabit(text);
  };

  return (
    <Container>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button
        title="Procurar"
        type="click"
        handlerClick={() => handlerClickFinding(text)}
      />
      <p>CardHabit {oneHabit}</p>
    </Container>
  );
};

export default FindHabits;
