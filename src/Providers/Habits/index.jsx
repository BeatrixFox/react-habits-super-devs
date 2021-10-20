import { createContext, useState, useContext, useEffect } from "react";
import api from "../../services/api";
import { UserContext } from "../User";
import { toast } from "react-toastify";

export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [oneHabit, setOneHabit] = useState([]);
  const [checkMove, setCheckMove] = useState(false);

  const { config } = useContext(UserContext);

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

  useEffect(() => {
    getHabits();
  }, [checkMove, config]);

  const createHabit = (data) => {
    console.log(data, config);
    api
      .post("/habits/", data, config)
      .then((response) => {
        setCheckMove(!checkMove);
        //setHabits([...habits, response.data]);
      })
      .catch((error) => console.log(error));
  };
  const deleteHabit = (id) => {
    api
      .delete(`/habits/${id}/`, config)
      .then((response) => {
        setCheckMove(!checkMove);
        //const refreshHabits = habits.filter((habit) => habit.id !== id);
        //setHabits(refreshHabits);
        //console.log(habits);
        
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
