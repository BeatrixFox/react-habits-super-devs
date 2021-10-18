import { Div, Container } from "./style";

const GroupsCard = ({ item }) => {
  return (
    <Container key={item.id}>
      <span>{item.title}</span>
      <Div>
        <span>Nome: {item.name}</span>
        <span>Descrição: {item.description}</span>
        <span>Categoria: {item.category}</span>
      </Div>
    </Container>
  );
};

export default GroupsCard;
