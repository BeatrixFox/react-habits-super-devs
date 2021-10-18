import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const HabitsContext = createContext([]);

//TODO mudar para um stateProvider
//const [accessToken] = useState(
//  JSON.parse(localStorage.getItem("@Habit:access")) || ""
//);
//ficou assim para eu ver o resultado do array
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0NjAyMDczLCJqdGkiOiJiZGU1ODJjMDFkNjk0MmE4YmNhMjlhZDY2ZDNmMDNmNiIsInVzZXJfaWQiOjF9.LoM4YMt6Ky-xUVEI47nChgVerjnCmCU2G4hrjug5peQ";

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const getHabits = () => {
    api
      .get("habits/personal/", config)
      .then((response) => setHabits(response.data))
      .catch((error) => console.log("Erro: ", error));
  };
  useEffect(() => {
    /*habits !== [] &&*/ getHabits();
  }, []);

  const createHabit = (date) => {
    api
      .post("habits/", date, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  const deleteHabit = (id) => {
    api
      .delete(`habits/${id}/`, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  const updatedHabit = (date) => {
    api
      .patch(`habits/${date.id}/`, date, config)
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
