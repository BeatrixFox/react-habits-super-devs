import { Container } from "./style";

export const ListGroup = ({ groups }) => {
  return (
    <Container>
      {groups.map((group) => (
        <li key={group.id}>
          <p>Cardlist {group}</p>
        </li>
      ))}
    </Container>
  );
};

export default ListGroup;
