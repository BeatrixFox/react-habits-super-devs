import { useHistory } from "react-router";
import { Div, Container } from "./style";
import { GroupsContext } from "../../Providers/Groups/index";
import { useContext } from "react";

const GroupsCard = ({ item }) => {
  const history = useHistory();
  const { oneGroup, getOneGroup } = useContext(GroupsContext);
  const handleClick = (item) => {
    getOneGroup(item.id);
    history.push("/group");
  };
  return (
    <Container key={item.id}>
      <span>{item.title}</span>
      <Div>
        <span>Nome: {item.name}</span>
        <span>Descrição: {item.description}</span>
        <span>Categoria: {item.category}</span>
        <button onClick={() => handleClick(item)}>+</button>
      </Div>
    </Container>
  );
};

export default GroupsCard;
