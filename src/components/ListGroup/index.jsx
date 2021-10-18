import { useContext } from "react";
import { Container } from "./style";
import { GroupsContext } from "../../Providers/Groups/index";
import GroupsCard from "../../components/GroupsCard/index";
import { useLocation } from "react-router-dom";

export const ListGroup = () => {
  const location = useLocation();
  const locationPath = location.pathname;
  const { groups, myGroups } = useContext(GroupsContext);
  const object = () => {
    if (locationPath === "/my_groups") {
      return myGroups;
    }
    if (locationPath === "/groups") {
      return groups;
    }
  };

  return (
    <Container>
      {object().map((group) => (
        <GroupsCard item={group} />
      ))}
    </Container>
  );
};

export default ListGroup;
