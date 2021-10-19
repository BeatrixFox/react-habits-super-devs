import Button from "../Button/index";
import { useContext, useState } from "react";
import { GoalsHabitsApiContext } from "../../Providers/goalsHabitsApi";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";
import { Container } from "./styles";

const FindGoals = () => {
  const [text, setText] = useState("");
  const { user } = useContext(UserHabitsApiContext);
  const { getOneGoal } = useContext(GoalsHabitsApiContext);

  const handlerClickFinding = (text) => {
    const goals = user.group.goals;
    const oneGoal = goals.filter((goal) => goal.title === text);
    getOneGoal(oneGoal.id);
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
    </Container>
  );
};

export default FindGoals;
