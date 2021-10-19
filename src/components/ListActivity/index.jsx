import { Container } from "./style";

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
      ))}
    </Container>
  );
};

export default ListActivity;
