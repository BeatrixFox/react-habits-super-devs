import { useContext } from "react";

import { Container } from "./styles";

import { GroupsContext } from "../../Providers/Groups/index";

import GroupsCard from "../../components/GroupsCard/index";

import { useLocation } from "react-router-dom";
import FindGoals from "../FindGoals";

const ListGroup = () => {
  const location = useLocation();

  const locationPath = location.pathname;

  const { groups, myGroups } = useContext(GroupsContext);

  if (locationPath === "/my_groups") {
    return (
      <Container>
        {myGroups.map((group) => (
          <GroupsCard key={group.id} item={group} />
        ))}
      </Container>
    );
  }

  if (locationPath === "/groups") {
    return (
      <Container>
        {groups.map((group) => (
          <div key={group.id}>

          
          <GroupsCard  item={group} />
          <FindGoals groupId={group.id} />
          </div>
        ))}
      </Container>
    );
  }
};

export default ListGroup;
