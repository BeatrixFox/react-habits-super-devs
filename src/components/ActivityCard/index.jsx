import { Div, Container } from "./styles";

const AtivityCard = ({ item }) => {
  return (
    <Container key={item.id}>
      <span>{item.title}</span>
      <Div>
        <span>Título: {item.title}</span>
        <span>Prazo: {item.realization_time}</span>
      </Div>
    </Container>
  );
};

export default AtivityCard;
