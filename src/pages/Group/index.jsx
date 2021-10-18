import Header from "../../components/Header";
import { Container } from "./style";
//import { useContext } from "react";
//import { GroupsContext } from "../../Providers/Groups/index";

export const Group = () => {
  //TODO precisa trabalhar os params para usar :id
  //const { oneGroup } = useContext(GroupsContext);

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
