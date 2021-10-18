import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

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

  useEffect(() => {
    /*habits !== [] &&*/ getHabits();
  }, []);

  const createHabit = (date) => {
    console.log(date);
    api
      .post("/habits/", date, config)
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
      value={{ habits, setHabits, createHabit, deleteHabit, updatedHabit }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
