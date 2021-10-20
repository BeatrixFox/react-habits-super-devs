import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { UserContext } from "../User";

export const GoalsHabitsApiContext = createContext();

export const GoalsHabitsApiProvider = ({ children }) => {
  const { config } = useContext(UserContext);

  const [goalCreated, setGoalCreated] = useState();
  const [goalUpdated, setGoalUpdated] = useState();
  const [goal, setGoal] = useState();
  const [goals, setGoals] = useState([]);

  const createGoal = (title, difficulty, how_much_achieved, group) => {
    api
      .post(
        "/goals/",
        {
          title: title,
          difficulty: difficulty,
          how_much_achieved: how_much_achieved,
          group: group,
        },
        config
      )
      .then((response) => setGoalCreated(response.data))
      .catch((err) => console.log(err));
  };

  const updateGoal = (goalId) => {
    api
      .patch(
        `/goals/${goalId}/`,
        {
          achieved: true,
        },
        config
      )
      .then((response) => {
        toast.success("Meta concluida com sucesso!");
        // setGoalUpdated(response.data)
      })
      .catch((err) => console.log(err));
  };

  const deleteGoal = (goalId) => {
    api
      .delete(`/goals/${goalId}/`, config)
      .then((response) => toast.success("Deletado com sucesso!"))
      .catch((err) => console.log(err));
  };

  const getOneGoal = (goalId) => {
    api
      .get(`/goals/${goalId}/`)
      .then((response) => setGoal(response.data))
      .catch((err) => {
        toast.error("Meta não encontrada");
        console.log(err);
      });
  };

  const getGroupGoals = (groupId, groupPage = 1) => {
    api
      .get(`/goals/?group=${groupId}&page=${groupPage}`)
      .then((response) => {
        setGoals(response.data.results);
      })
      .catch((err) => {
        toast.error("Meta não encontrada");
        console.log(err);
      });
  };

  return (
    <GoalsHabitsApiContext.Provider
      value={{
        createGoal,
        goalCreated,
        updateGoal,
        goalUpdated,
        deleteGoal,
        getOneGoal,
        goal,
        getGroupGoals,
        goals,
        setGoal,
      }}
    >
      {children}
    </GoalsHabitsApiContext.Provider>
  );
};
