import { Container } from "./style";
import { Redirect } from "react-router";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/Groups/index";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";
import ListActivity from "../../components/ListActivity";

const Group = () => {
  const { authorized } = useContext(UserHabitsApiContext);
  const { oneGroup } = useContext(GroupsContext);
  //const activities = [...oneGroup.activities];
  //TODO precisa trabalhar os params para usar :id
  //const { oneGroup } = useContext(GroupsContext);

  if (!authorized) {
    //   return <Redirect to="/login" />;
  }

  return (
    <>
      <Container>
        <p>Aqui vai o componet metas</p>
        {oneGroup.activities && <ListActivity oneGroup={oneGroup} />}
        <p>Aqui vai o componet membros</p>
      </Container>
    </>
  );
};

export default Group;
