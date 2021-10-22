import { Div, Container } from "./styles";
import AuxButton from "../AuxButton/index";

import { useContext } from "react";
import { HabitsContext } from "../../Providers/Habits";

const HabitsCard = ({ item }) => {
  const { deleteHabit, updatedHabit } = useContext(HabitsContext);

  const handleClickUpdate = (id, how_much_achieved) => {
    updatedHabit(id, how_much_achieved);
  };

  const handleClickDelete = (id) => {
    deleteHabit(id);
  };

  return (
    <Container>
      <p>{item.title}</p>
      <span>Categoria: {item.category}</span>
      <span>Dificuldade: {item.difficulty}</span>
      <span>Frequência: {item.frequency}</span>
      <span>Status: {item.achieved ? "Concluído" : "Em progresso"}</span>
      <span>Progresso: {item.how_much_achieved}</span>
      <div className="buttons">
        <AuxButton
          handleClick={() => handleClickUpdate(item.id, item.how_much_achieved)}
          type="click"
          title="UPD"
        />
        <AuxButton
          handleClick={() => handleClickDelete(item.id)}
          type="click"
          title="DEL"
        />
      </div>
    </Container>
  );
};

export default HabitsCard;
