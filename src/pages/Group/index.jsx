import Header from "../../components/Header";
import { Container } from "./style";
import { Redirect } from "react-router";
import { useContext } from "react";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";
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
      <Header /*titleMessage={group}*/ />
      <Container>
        <p>Aqui vai o componet metas</p>
        <p>Aqui vai o componet atividades</p>
        <p>Aqui vai o componet membros</p>
      </Container>
    </>
  );
};

export default Group;
