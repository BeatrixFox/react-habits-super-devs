import { Container } from "./styles";
import { useContext } from "react";
import ListHabits from "../../components/ListHabits";
import { Redirect } from "react-router";
import { UserContext } from "../../Providers/User";
import AddHabits from "../../components/AddHabits";
import FindHabits from "../../components/FindHabits/index";

const Habits = () => {
  const { authorized } = useContext(UserContext);

  if (!authorized) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Container>
        <FindHabits />
        <ListHabits />
        <AddHabits />
      </Container>
    </>
  );
};

export default Habits;
