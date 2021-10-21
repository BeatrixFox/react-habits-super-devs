import { Container } from "./styles";
import Button from "../../components/Button/index";
import { Redirect } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../Providers/User";
import ListGroup from "../../components/ListGroup/index";
import FindGroup from "../../components/FindGroup";
import NewGroup from "../../components/NewGroup";

const Groups = () => {
  const { authorized } = useContext(UserContext);

  if (!authorized) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Container>
        <ListGroup />
        <NewGroup />
        <FindGroup />
      </Container>
    </>
  );
};

export default Groups;
