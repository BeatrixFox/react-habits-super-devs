import { Div, Container } from "./style";
import Button from "../Button/index";

import { useContext } from "react";


export const HabitsCard = ({ item }) => {

  const handleClickUpdate = (id) => {

    console.log(`handleClickUpdate id ${id}`);
  };

  const handleClickDelete = (id) => {
    console.log(`handleClickDelete id ${id}`);
  };

  return (
    <Container >
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
