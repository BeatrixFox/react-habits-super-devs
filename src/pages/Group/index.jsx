import { Container } from "./style";
import { Redirect } from "react-router";
import { useContext } from "react";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";
import FindActivity from "../../components/FindActivity/index";
import ListActivity from "../../components/ListActivity/index";
import FindGoals from "../../components/FindGoals/index";
import ListGoals from "../../components/ListGoals/index";
//import { GroupsContext } from "../../Providers/Groups/index";

const Group = () => {
  const { authorized } = useContext(UserHabitsApiContext);

  //TODO precisa trabalhar os params para usar :id
  //const { oneGroup } = useContext(GroupsContext);

  // if (!authorized) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <>
      <Container>
        <p>Aqui vai o componet metas</p>
        <ListGoals />
        <FindGoals />
        <p>Aqui vai o componet atividades</p>
        <ListActivity />
        <FindActivity />
        <p>Aqui vai o componet membros</p>
      </Container>
    </>
  );
};

export default Group;
