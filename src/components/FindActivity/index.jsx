import Button from "../Button/index";
import { useContext, useState } from "react";
import { ActivitiesHabitsApiContext } from "../../Providers/activitiesHabitsApi";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";
import { Container } from "./styles";

const FindActivity = () => {
  const [text, setText] = useState("");
  const { user } = useContext(UserHabitsApiContext);
  const { getOneActivity } = useContext(ActivitiesHabitsApiContext);

  const handlerClickFinding = (text) => {
    const activities = user.group.activities;
    const oneAtv = activities.filter((activity) => activity.title === text);
    getOneActivity(oneAtv.id);
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

export default FindActivity;
