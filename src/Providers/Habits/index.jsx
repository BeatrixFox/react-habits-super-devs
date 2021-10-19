import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [oneHabit, setOneHabit] = useState([]);

  const [accessToken] = useState(
    JSON.parse(localStorage.getItem("@Habit:access")) || ""
  );

  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  const getHabits = () => {
    api
      .get("/habits/personal/", config)
      .then((response) => setHabits(response.data))
      .catch((error) => console.log("Erro: ", error));
  };

  const getOneHabit = (titleHabit) => {
    api
      .get("/habits/personal/", config)
      .then((response) => {
        const listHabits = response.data;
        const refreshListHabits = listHabits.filter(
          (oneItemList) => oneItemList.title === titleHabit
        );
        setOneHabit(refreshListHabits);
      })
      .catch((error) => console.log("Erro: ", error));
  };

  //useEffect(() => {
  /*habits !== [] &&*/ //getHabits();
  //}, []);

  const createHabit = (data) => {
    console.log(data);
    api
      .post("/habits/", data, config)
      .then((response) => {
        setHabits([...habits, response.data]);
      })
      .catch((error) => console.log(error));
  };
  const deleteHabit = (id) => {
    api
      .delete(`/habits/${id}/`, config)
      .then((response) => {
        const refreshHabits = habits.filter((habit) => habit.id !== id);
        setHabits(refreshHabits);
        console.log(habits);
      })
      .catch((error) => console.log(error));
  };
  const updatedHabit = (date) => {
    api
      .patch(`/habits/${date.id}/`, date, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <HabitsContext.Provider
      value={{
        habits,
        setHabits,
        getHabits,
        createHabit,
        deleteHabit,
        updatedHabit,
        getOneHabit,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
