import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

export const GroupsContext = createContext([]);

export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [myGroups, setMyGroups] = useState([]);
  const [oneGroup, setOneGroup] = useState([]);

  const [accessToken] = useState(
    JSON.parse(localStorage.getItem("@Habit:access")) || ""
  );

  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  const getGroups = () => {
    //não pede autenticação .get("groups/", config)
    api
      .get("/groups/", config)
      .then((response) => setGroups(response.data.results))
      .catch((error) => console.log("Erro: ", error));
  };
  const getOneGroups = (id) => {
    //não pede autenticação
    api
      .get(`/groups/${id}/`)
      .then((response) => setOneGroup(response.data))
      .catch((error) => {
        toast.error("Grupo não encontrado");
        console.log("Erro: ", error);
      });
  };

  const getMyGroups = () => {
    api
      .get("/groups/subscriptions/", config)
      .then((response) => setMyGroups(response.data))
      .catch((error) => console.log("Erro: ", error));
  };

  useEffect(() => {
    /*groups !== [] &&*/ getGroups();
    /*myGroups !== [] &&*/ getMyGroups();
  }, []);

  const createGroup = (data) => {
    api
      .post("groups/", data, config)
      .then((response) => {
        setGroups([...groups, response.data]);
        toast.success("Grupo criado com sucesso");
        console.log(response);
      })
      .catch((error) => {
        toast.error("Grupo não pode ser criado. Tente novamente");
        console.log(error);
      });
  };
  const updatedGroup = (date, userId) => {
    if (userId === date.creator.id) {
      api
        .patch(`groups/${date.id}/`, date, config)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    }
  };
  const subscribeToGroup = (id) => {
    api
      .get(`groups/${id}/subscribe/`)
      .then((response) => {
        toast.success("Inscrição feita");
        console.log("Adicionado");
      })
      .catch((error) => console.log("Erro: ", error));
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        myGroups,
        oneGroup,
        setGroups,
        createGroup,
        updatedGroup,
        getOneGroups,
        subscribeToGroup,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
