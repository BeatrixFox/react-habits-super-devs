import { Container } from "./styles";
import { Redirect } from "react-router";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/Groups/index";
import { GoalsHabitsApiContext } from "../../Providers/goalsHabitsApi/index";
import { UserContext } from "../../Providers/User/index";
import FindGoals from "../../components/FindGoals/index";
import FindActivity from "../../components/FindActivity/index";
import ListActivity from "../../components/ListActivity/index";
import ListGoals from "../../components/ListGoals/index";
import Button from "../../components/Button/index";

const Group = () => {
  const { authorized } = useContext(UserContext);
  const { oneGroup, subscribeToGroup } = useContext(GroupsContext);
  const { groupedGoals } = useContext(GoalsHabitsApiContext);
  //const activities = [...oneGroup.activities];
  //TODO precisa trabalhar os params para usar :id
  //const { oneGroup } = useContext(GroupsContext);

  console.log(oneGroup);

  const handlerClickSubscribe = () => {
    subscribeToGroup(oneGroup.id);
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
          Listar membros da gangue:
          <ul>
            {oneGroup.users_on_group &&
              oneGroup.users_on_group.map((itemUser) => (
                <li key={itemUser.id}>{itemUser.username}</li>
              ))}
          </ul>
        </div>

        <p>Aqui vai o componet membros</p>
        <Button title="Inscrever-se" handleClick={handlerClickSubscribe} />
      </Container>
    </>
  );
};

export default Group;
