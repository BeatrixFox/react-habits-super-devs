import { Container, Div } from "./style";
import AtivityCard from "../ActivityCard/index";

const ListActivity = ({ oneGroup }) => {
  return (
    <Container>
      {oneGroup.activities.map((item) => (
        <p>Título: {item.title}</p>
      ))}
    </Container>
  );
};

export default ListActivity;
