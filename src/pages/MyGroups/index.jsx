import { Container } from "./styles";
import { Redirect } from "react-router";
import { UserContext } from "../../Providers/User";
import { useContext } from "react";
import ListGroup from "../../components/ListGroup/index";
import FindGroup from "../../components/FindGroup";

const MyGroups = () => {
  const { authorized } = useContext(UserContext);

  if (!authorized) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Container>
        <ListGroup />
        <FindGroup />
      </Container>
    </>
  );
};

export default MyGroups;
