import { Container } from "./style";
import Button from "../../components/Button/index";
import { Redirect } from "react-router";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";
import { useContext } from "react";
import ListGroup from "../../components/ListGroup/index";

export const MyGroups = () => {
  const { authorized } = useContext(UserHabitsApiContext);

  const handleClickSearch = () => {
    console.log("handleClickSearch");
  };

  if (!authorized) {
    //return <Redirect to="/login" />;
  }

  return (
    <>
      <Container>
        <ListGroup />
        <Button
          handleClick={handleClickSearch}
          type="onClick"
          title="Procurar"
        />
      </Container>
    </>
  );
};

export default MyGroups;
