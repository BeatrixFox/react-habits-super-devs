import { Container } from "./style";

export const ListActivity = ({ activities }) => {
  return (
    <Container>
      {activities.map((activity) => (
        <li key={activity.id}>
          <p>Cardlist {activity}</p>
        </li>
      ))}
    </Container>
  );
};

export default ListActivity;
