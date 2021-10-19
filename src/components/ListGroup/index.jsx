import { useContext } from "react";
import { Container } from "./style";
import { GroupsContext } from "../../Providers/Groups/index";
import GroupsCard from "../../components/GroupsCard/index";
import { useLocation } from "react-router-dom";

const ListGroup = () => {
  const location = useLocation();
  const locationPath = location.pathname;
  const { groups, myGroups } = useContext(GroupsContext);
  let object = [];
  if (locationPath === "/my_groups/") {
    object = [...myGroups];
  }
  if (locationPath === "/groups/") {
    object = [...groups];
  }

  return (
    <Container>
      {object.map((group) => (
        <GroupsCard item={group} />
      ))}
    </Container>
  );
};

export default ListGroup;
