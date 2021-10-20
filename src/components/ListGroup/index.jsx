import { useContext } from "react";

import { Container } from "./styles";

import { GroupsContext } from "../../Providers/Groups/index";

import GroupsCard from "../../components/GroupsCard/index";

import { useLocation } from "react-router-dom";

import Button from "../Button/index";

const ListGroup = () => {
  const location = useLocation();

  const locationPath = location.pathname;

  const { groups, myGroups, page, setPage } = useContext(GroupsContext);

  const handleClickNextPage = () => {
    setPage(page + 1);
    console.log(page);
  };
  const handleClickBackPage = () => {
    page > 1 ? setPage(page - 1) : setPage(page);
    console.log(page);
  };

  if (locationPath === "/my_groups") {
    return (
      <Container>
        {myGroups.map((group) => (
          <GroupsCard item={group} />
        ))}
        <Button
          handleClick={handleClickBackPage}
          type="click"
          title="Pagina Anterior"
        ></Button>
        <Button
          handleClick={handleClickNextPage}
          type="click"
          title="Pagina Posterior"
        ></Button>
      </Container>
    );
  }

  if (locationPath === "/groups") {
    return (
      <Container>
        {groups.map((group) => (
          <GroupsCard item={group} />
        ))}
        <Button
          handleClick={handleClickBackPage}
          type="click"
          title="Pagina Anterior"
        ></Button>
        <Button
          handleClick={handleClickNextPage}
          type="click"
          title="Pagina Posterior"
        ></Button>
      </Container>
    );
  }
};

export default ListGroup;
