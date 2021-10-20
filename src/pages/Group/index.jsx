import { Container } from "./styles";
import { Redirect, useHistory } from "react-router";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/Groups/index";
import { GoalsHabitsApiContext } from "../../Providers/goalsHabitsApi/index";
import { UserContext } from "../../Providers/User/index";
import FindGoals from "../../components/FindGoals/index";
import FindActivity from "../../components/FindActivity/index";
import ListActivity from "../../components/ListActivity/index";
import ListGoals from "../../components/ListGoals/index";
import ListMembers from "../../components/ListMembers";
import Button from "../../components/Button/index";

const Group = () => {
  const history = useHistory();
  const { authorized } = useContext(UserContext);
  const { oneGroup, subscribeToGroup, unsubscribeToGroup } =
    useContext(GroupsContext);
  const { groupedGoals } = useContext(GoalsHabitsApiContext);
  //const activities = [...oneGroup.activities];
  //TODO precisa trabalhar os params para usar :id
  //const { oneGroup } = useContext(GroupsContext);

  console.log(oneGroup);

  const handlerClickSubscribe = () => {
    subscribeToGroup(oneGroup.id);
  };

  const handlerClickUnsubscribe = () => {
    unsubscribeToGroup(oneGroup.id);
    history.push("/my_groups");
  };

  if (!authorized) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Container>
        <h1>{oneGroup.name}</h1>
        <p>{oneGroup.description}</p>
        <p>Aqui vai o componet metas</p>

        <ListGoals />
        <div>
          Buscar Metas:
          <FindGoals />
        </div>
        <div>
          Buscar atividades:
          {<FindActivity />}
        </div>
        <div>
          Listar Metas:
          {/* */}
        </div>
        <div>
          Listar atividades:
          {!!oneGroup.activities && <ListActivity oneGroup={oneGroup} />}
        </div>
        <div>
          <ListMembers />
        </div>
        <Button title="Inscrever-se" handleClick={handlerClickSubscribe} />
        <Button title="Deixar grupo" handleClick={handlerClickUnsubscribe} />
      </Container>
    </>
  );
};

export default Group;
