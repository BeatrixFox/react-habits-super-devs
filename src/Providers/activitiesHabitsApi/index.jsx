import { createContext, useContext, useState } from "react";

import api from "../../services/api";
import { UserContext } from "../User";

export const ActivitiesHabitsApiContext = createContext();

export const ActivitiesHabitsApiProvider = ({ children }) => {
  const { config } = useContext(UserContext);

  const [activityCreated, setActivityCreated] = useState();
  const [updatedActivity, setUpdatedActivity] = useState();
  const [groupActivities, setGroupActivities] = useState([]);
  const [oneActivity, setOneActivity] = useState([]);

  const createActivity = (title, realization_time, group) => {
    api
      .post(
        "/activities/",
        {
          title: title,
          realization_time: realization_time,
          group: group,
        },
        config
      )
      .then((response) => setActivityCreated(response.data))
      .catch((err) => console.log(err));
  };

  const updateActivity = (newTitle, activityId) => {
    api
      .patch(
        `/activities/${activityId}/`,
        {
          title: newTitle,
        },
        config
      )
      .then((response) => setUpdatedActivity(response.data))
      .catch((err) => console.log(err));
  };

  const deleteActivity = (activityId) => {
    api
      .delete(`/activities/${activityId}/`, config)
      .then((response) => console.log("Deletado com sucesso!"))
      .catch((err) => console.log(err));
  };

  const getGroupActivities = (groupId, groupPageId = 1) => {
    api
      .get(`/activities/?group=${groupId}&page=${groupPageId}`)
      .then((response) => setGroupActivities(response.data.results))
      .catch((err) => console.log(err));
  };

  const getOneActivity = (activityId) => {
    api
      .get(`/activities/${activityId}/`)
      .then((response) => setOneActivity(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <ActivitiesHabitsApiContext.Provider
      value={{
        createActivity,
        activityCreated,
        updateActivity,
        updatedActivity,
        deleteActivity,
        getGroupActivities,
        groupActivities,
        getOneActivity,
        oneActivity,
      }}
    >
      {children}
    </ActivitiesHabitsApiContext.Provider>
  );
};
