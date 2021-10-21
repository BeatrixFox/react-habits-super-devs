import { useHistory } from "react-router";
import { Div, Container } from "./styles";
import { GroupsContext } from "../../Providers/Groups/index";
import { useContext } from "react";

const GroupsCard = ({ group }) => {
  const history = useHistory();
  const { getOneGroup } = useContext(GroupsContext);
  const handleClick = (group) => {
    getOneGroup(group.id);
    history.push("/group");
  };
  console.log(group)
  return (
    <Container>
      <Div>
        <span>Nome: {group.name}</span>
        <span>Descrição: {group.description}</span>
        <span>Categoria: {group.category}</span>
        <button onClick={() => handleClick(group)}>++</button>
      </Div>
    </Container>
  );
};

export default GroupsCard;
