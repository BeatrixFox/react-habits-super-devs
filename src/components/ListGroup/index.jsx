import { useContext } from "react";

import { Container } from "./style";

import { GroupsContext } from "../../Providers/Groups/index";

import GroupsCard from "../../components/GroupsCard/index";

import { useLocation } from "react-router-dom";

const ListGroup = () => {
  const location = useLocation();

  const locationPath = location.pathname;

  const { groups, myGroups } = useContext(GroupsContext);

  if (locationPath === "/my_groups") {
    return (
      <Container>
        {myGroups.map((group) => (
          <GroupsCard item={group} />
        ))}
      </Container>
    );
  }

  if (locationPath === "/groups") {
    return (
      <Container>
        {groups.map((group) => (
          <GroupsCard item={group} />
        ))}
      </Container>
    );
  }
};

export default ListGroup;
