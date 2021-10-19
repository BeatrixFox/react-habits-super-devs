import Button from "../Button/index";
import { useContext, useState } from "react";
import { UserContext } from "../../Providers/User";
import { Container } from "./styles";

const FindGoals = (groupedGoals) => {
  const [text, setText] = useState("");
  const { user } = useContext(UserContext);

  const handlerClickFinding = (text) => {
    const goals = user.group.goals;
    const oneGoal = goals.filter((goal) => goal.title === text);
    groupedGoals(oneGoal.id);
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
