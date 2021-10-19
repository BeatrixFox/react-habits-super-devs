import { Container } from "./styles";
import Button from "../../components/Button/index";
import { Redirect } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../Providers/User";
import ListGroup from "../../components/ListGroup/index";
import FindGroup from "../../components/FindGroup";

const Groups = () => {
  const { authorized } = useContext(UserContext);

  const handleClickAddGroup = () => {
    console.log("handleClickAddGroup");
  };
  const handleClickSearch = () => {
    console.log("handleClickSearch");
  };

  if (!authorized) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Container>
        <ListGroup />
        <Button
          handleClick={handleClickAddGroup}
          type="click"
          title="Novo Grupo"
        />
        <FindGroup />
        {/* <Button handleClick={handleClickSearch} type="click" title="Procurar" /> */}
      </Container>
    </>
  );
};

export default Groups;
