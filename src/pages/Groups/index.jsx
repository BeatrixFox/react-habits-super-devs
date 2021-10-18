import { Container } from "./style";
import Button from "../../components/Button/index";
import { Redirect } from "react-router";
import { useContext } from "react";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";
import ListGroup from "../../components/ListGroup/index";

const Groups = () => {
  const { authorized } = useContext(UserHabitsApiContext);

  const handleClickAddGroup = () => {
    console.log("handleClickAddGroup");
  };
  const handleClickSearch = () => {
    console.log("handleClickSearch");
  };

  if (!authorized) {
    //   return <Redirect to="/login" />;
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
        <Button handleClick={handleClickSearch} type="click" title="Procurar" />
      </Container>
    </>
  );
};

export default Groups;
