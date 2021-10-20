import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { UserContext } from "../User/index";

export const GroupsContext = createContext([]);

export const GroupsProvider = ({ children }) => {
  const { config } = useContext(UserContext);

  const [groups, setGroups] = useState([]);
  const [myGroups, setMyGroups] = useState([]);
  const [oneGroup, setOneGroup] = useState([]);
  const [checkMove, setCheckMove] = useState(false);

  const getGroups = () => {
    //não pede autenticação .get("groups/", config)
    api
      .get("/groups/", config)
      .then((response) => setGroups(response.data.results))
      .catch((error) => console.log("Erro: ", error));
  };
  const getOneGroup = (id) => {
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
  }, [checkMove, config]);

  const createGroup = (data) => {
    api
      .post("groups/", data, config)
      .then((response) => {
        setCheckMove(!checkMove);
        //setGroups([...groups, response.data]);
        toast.success("Grupo criado com sucesso");
        //console.log(response);
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
      .post(`groups/${id}/subscribe/`, null, config)
      .then((response) => {
        setCheckMove(!checkMove);
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
        getOneGroup,
        subscribeToGroup,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
