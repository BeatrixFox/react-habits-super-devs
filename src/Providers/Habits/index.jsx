import { createContext, useState, useContext, useEffect } from "react";
import api from "../../services/api";
import { UserContext } from "../User";

export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {
  const { userId } = useContext(UserContext);
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
        const search = listHabits
          .filter((oneItemList) => {
            return oneItemList.title === titleHabit;
          })
          .filter((item) => {
            return item.user === userId;
          });
        setOneHabit(search);
      })
      .catch((error) => console.log("Erro: ", error));
  };
  console.log("oneHabit no provider: ", oneHabit);
  useEffect(() => {
    getHabits();
  }, [checkMove, config]);

  const createHabit = (data) => {
    console.log(data, config);
    api
      .post("/habits/", data, config)
      .then((response) => {
        setCheckMove(!checkMove);
      })
      .catch((error) => console.log(error));
  };
  const deleteHabit = (id) => {
    api
      .delete(`/habits/${id}/`, config)
      .then((response) => {
        setCheckMove(!checkMove);
      })
      .catch((error) => console.log(error));
  };
  const updatedHabit = (id, how_much_achieved) => {
    api
      .patch(
        `/habits/${id}/`,
        {
          how_much_achieved:
            how_much_achieved < 100
              ? how_much_achieved + 5
              : (how_much_achieved = 100),
          achieved: how_much_achieved > 90 ? true : false,
        },
        config
      )
      .then((response) => {
        console.log(response);
        setCheckMove(!checkMove);
      })
      .catch((error) => console.log(error));
  };

  return (
    <HabitsContext.Provider
      value={{
        habits,
        oneHabit,
        setHabits,
        getHabits,
        createHabit,
        deleteHabit,
        updatedHabit,
        getOneHabit,
        oneHabit,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};
