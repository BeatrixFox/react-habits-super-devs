import { Container } from "./styles";
import { Redirect } from "react-router";
import { UserContext } from "../../Providers/User";
import { useContext } from "react";
import ListGroup from "../../components/ListGroup/index";
import FindGroup from "../../components/FindGroup";

export const MyGroups = () => {
  const { authorized } = useContext(UserContext);

  if (!authorized) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Container>
        <ListGroup />
        <FindGroup isMyGroups />
      </Container>
    </>
  );
};

export default MyGroups;
