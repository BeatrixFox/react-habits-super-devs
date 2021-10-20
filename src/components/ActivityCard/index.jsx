import { Div, Container } from "./styles";
import { ActivitiesHabitsApiContext } from "../../Providers/activitiesHabitsApi";
import { useContext } from "react";
import Button from "../Button";

const AtivityCard = ({ item }) => {
  const { deleteActivity } = useContext(ActivitiesHabitsApiContext);

  const handleClickDelete = (activityId) => {
    deleteActivity(activityId);
    console.log(activityId);
  };

  return (
    <Container key={item.id}>
      <span>{item.title}</span>
      <Div>
        <span>Título: {item.title}</span>
        <span>Prazo: {item.realization_time}</span>
        <Button
          type="onClick"
          title="Atualizar"
          handleClick={() => handleClickDelete(item.id)}
        />
        <Button
          type="onClick"
          title="Deletar"
          handleClick={() => handleClickDelete(item.id)}
        />
      </Div>
    </Container>
  );
};

export default AtivityCard;
