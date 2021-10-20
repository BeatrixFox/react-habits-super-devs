import { Container } from "./styles";
import { Redirect } from "react-router";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/Groups/index";
import { GoalsHabitsApiContext } from "../../Providers/goalsHabitsApi/index";
import { UserContext } from "../../Providers/User";
import FindGoals from "../../components/FindGoals/index";
import FindActivity from "../../components/FindActivity/index";
import ListActivity from "../../components/ListActivity/index";
import ListGoals from "../../components/ListGoals/index";

const Group = () => {
  const { authorized } = useContext(UserContext);
  const { oneGroup } = useContext(GroupsContext);
  const { groupedGoals } = useContext(GoalsHabitsApiContext);
  //const activities = [...oneGroup.activities];
  //TODO precisa trabalhar os params para usar :id
  //const { oneGroup } = useContext(GroupsContext);

  if (!authorized) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Container>
        <p>Aqui vai o componet metas</p>

        <ListGoals />
        <div>
          
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
          {/* */}
        </div>

        <p>Aqui vai o componet membros</p>
      </Container>
    </>
  );
};

export default Group;
