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
  const [page, setPage] = useState(1);

  const getGroups = () => {
    api
      .get(`/groups/?page=${page}`, config)
      .then((response) => {
        setGroups(response.data.results);
      })
      .catch((error) => console.log("Erro: ", error));
  };
  const getOneGroup = (id) => {
    api
      .get(`/groups/${id}/`)
      .then((response) => {
        setOneGroup(response.data);
      })
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
    config.headers && getMyGroups();
    config.headers && getGroups();
  }, [checkMove, config, page]);

  const createGroup = (data) => {
    api
      .post("groups/", data, config)
      .then((response) => {
        setCheckMove(!checkMove);
        toast.success("Grupo criado com sucesso, volte ao seu perfil");
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
          console.log("Atualizado com sucesso!");
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
      })
      .catch((error) => console.log("Erro: ", error));
  };

  const unsubscribeToGroup = (id) => {
    api
      .delete(`groups/${id}/unsubscribe/`, config)
      .then((response) => {
        setCheckMove(!checkMove);
        toast.info("Inscrição desfeita");
      })
      .catch((error) => toast.error("Operação já efetuada"));
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        myGroups,
        oneGroup,
        page,
        setGroups,
        createGroup,
        updatedGroup,
        getOneGroup,
        subscribeToGroup,
        unsubscribeToGroup,
        setPage,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};
