import { Container } from "./styles";
import { GroupsContext } from "../../Providers/Groups/index";
import { useContext } from "react";

const ListMembers = () => {
  const { oneGroup } = useContext(GroupsContext);
  return (
    <Container>
      <h4>Listar membros da gangue:</h4>
      <ul>
        {oneGroup.users_on_group &&
          oneGroup.users_on_group.map((itemUser) => (
            <li key={itemUser.id}>{itemUser.username}</li>
          ))}
      </ul>
    </Container>
  );
};

export default ListMembers;
