import { useContext } from "react";
import { BtnNavegation, Container, SectionBtn } from "./styles";
import { GroupsContext } from "../../Providers/Groups/index";
import GroupsCard from "../../components/GroupsCard/index";

import { useLocation } from "react-router-dom";
import FindGoals from "../FindGoals";

import Button from "../Button/index";

const ListGroup = () => {
  const location = useLocation();
  const locationPath = location.pathname;
  const { groups, myGroups, page, setPage } = useContext(GroupsContext);

  const handleClickNextPage = () => {
    setPage(page + 1);
  };
  const handleClickBackPage = () => {
    page > 1 ? setPage(page - 1) : setPage(page);
  };

  if (locationPath === "/groups") {
    return (
      <Container>
        {groups.map((group) => (
          <div key={group.id}>
            <GroupsCard group={group} />
          </div>
        ))}
        <SectionBtn>
          <BtnNavegation onClick={handleClickBackPage} type="click">
            Pagina Anterior
          </BtnNavegation>
          <BtnNavegation onClick={handleClickNextPage} type="click">
            Pagina Posterior
          </BtnNavegation>
        </SectionBtn>
      </Container>
    );
  }
  if (locationPath === "/my_groups") {
    return (
      <Container>
        {myGroups.map((group) => (
          <GroupsCard key={group.id} group={group} />
        ))}
      </Container>
    );
  }
};

export default ListGroup;
