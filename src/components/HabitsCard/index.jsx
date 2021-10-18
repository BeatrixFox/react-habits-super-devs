import { Div, Container } from "./style";
import Button from "../Button/index";

import { useContext } from "react";
import { HabitsContext } from "../../Providers/Habits";
import { toast } from "react-toastify";

export const HabitsCard = ({ item }) => {
  const { deleteHabit } = useContext(HabitsContext);

  const handleClickUpdate = (id) => {
    console.log(`handleClickUpdate id ${id}`);
  };

  const handleClickDelete = (id) => {
    deleteHabit(id);
    // toast.success("Hábito Removido com Sucesso.");
  };

  return (
    <Container>
      <span>{item.title}</span>
      <Div>
        <span>Categoria: {item.category}</span>
        <span>Dificuldade: {item.difficulty}</span>
        <span>Frequência: {item.frequency}</span>
        <span>Status: {item.achieved}</span>
        <span>Contagem regressiva: {item.how_much_achieved}</span>
        <Button
          handleClick={() => handleClickUpdate(item.id)}
          type="onClick"
          title="Atualizar"
        />
        <Button
          handleClick={() => handleClickDelete(item.id)}
          type="onClick"
          title="Deletar"
        />
      </Div>
    </Container>
  );
};

export default HabitsCard;
