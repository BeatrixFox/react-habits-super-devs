import { useHistory } from "react-router";
import { Container } from "./styles";
import { GroupsContext } from "../../Providers/Groups/index";
import { useContext } from "react";

const GroupsCard = ({ group }) => {
  const history = useHistory();
  const { getOneGroup } = useContext(GroupsContext);
  const handleClick = (group) => {
    getOneGroup(group.id);
    history.push("/group");
  };
  return (
    <Container>
      <p>{group.name}</p>
      <span>Descrição: {group.description}</span>
      <span>Categoria: {group.category}</span>
      <button onClick={() => handleClick(group)}>Mais Detalhes</button>
    </Container>
  );
};

export default GroupsCard;
