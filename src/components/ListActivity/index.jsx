import { Container, Div } from "./styles";
import AtivityCard from "../ActivityCard/index";
import { useEffect } from "react";

import { ActivitiesHabitsApiContext } from "../../Providers/activitiesHabitsApi";

import { useContext } from "react";

export const ListActivity = ({oneGroup}) => {
  const { groupActivities, getGroupActivities, updateActivity, deleteActivity } = useContext(ActivitiesHabitsApiContext);  

  useEffect(() => {
    getGroupActivities(oneGroup.id)
  }, [oneGroup.id, updateActivity, deleteActivity])
  
  return (
    <Container>
      {groupActivities?.map((activity) => (
        <li key={activity.id}>
          <AtivityCard item={activity} />
        </li>
      ))}
    </Container>
  );
};

export default ListActivity;
