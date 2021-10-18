import { useContext } from "react";
import { Container } from "./style";
import { GroupsContext } from "../../Providers/Groups/index";
import GroupsCard from "../../components/GroupsCard/index";

export const ListGroup = () => {
  const { groups } = useContext(GroupsContext);
  console.log("grupos: ", groups);
  return (
    <Container>
      {groups.map((group) => (
        <GroupsCard item={group} />
      ))}
    </Container>
  );
};

export default ListGroup;
