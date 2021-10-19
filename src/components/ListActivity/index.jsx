import { Container, Div } from "./style";
import AtivityCard from "../ActivityCard/index";

<<<<<<< HEAD
const ListActivity = ({ oneGroup }) => {
  return (
    <Container>
      {oneGroup.activities.map((item) => (
        <p>Título: {item.title}</p>
=======
import { ActivitiesHabitsApiContext } from "../../Providers/activitiesHabitsApi";

import { useContext } from "react";

export const ListActivity = () => {
  const { groupActivities } = useContext(ActivitiesHabitsApiContext);

  return (
    <Container>
      {groupActivities.map((activity) => (
        <li key={activity.id}>
          <p>Cardlist {activity}</p>
        </li>
>>>>>>> develop
      ))}
    </Container>
  );
};

export default ListActivity;
