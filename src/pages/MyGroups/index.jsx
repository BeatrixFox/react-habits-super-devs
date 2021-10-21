import { Container } from "./styles";
import Button from "../../components/Button/index";
import { Redirect } from "react-router";
import { UserContext } from "../../Providers/User";
import { useContext } from "react";
import ListGroup from "../../components/ListGroup/index";
import FindGroup from "../../components/FindGroup";

export const MyGroups = () => {
  const { authorized } = useContext(UserContext);

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
        <FindGroup isMyGroups/>
      </Container>
    </>
  );
};

export default MyGroups;
