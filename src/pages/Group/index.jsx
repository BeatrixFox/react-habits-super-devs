import { Container } from "./styles";
import { Redirect, useHistory } from "react-router";
import { useContext } from "react";
import { GroupsContext } from "../../Providers/Groups/index";
import { GoalsHabitsApiContext } from "../../Providers/goalsHabitsApi/index";
import { UserContext } from "../../Providers/User/index";
import FindGoals from "../../components/FindGoals/index";
import FindActivity from "../../components/FindActivity/index";
import ListActivity from "../../components/ListActivity/index";
import AddActivity from "../../components/AddActivity/index";
import AddGoals from "../../components/AddGoals/index";
import ListGoals from "../../components/ListGoals/index";
import ListMembers from "../../components/ListMembers";
import Button from "../../components/Button/index";

const Group = ({ item }) => {
  const history = useHistory();
  const { authorized } = useContext(UserContext);
  const { oneGroup, subscribeToGroup, unsubscribeToGroup } =
    useContext(GroupsContext);
  const { goals } = useContext(GoalsHabitsApiContext);
  console.log("item: ", item);
  const handlerClickSubscribe = () => {
    subscribeToGroup(oneGroup.id);
  };

  const handlerClickUnsubscribe = () => {
    unsubscribeToGroup(oneGroup.id);
    history.push("/my_groups");
  };

  if (!authorized) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Container>
        <h1>{oneGroup.name}</h1>
        <p>{oneGroup.description}</p>
        <p>Aqui vai o componet metas</p>
        <div>
          <p>====================</p>
          <p>Listar Metas:</p>
          <ListGoals />
          {/* <AddGoals /> */}
          {/* <FindGoals /> */}
          <p>====================</p>
        </div>
        <div>          
          {!!oneGroup.activities && <ListActivity oneGroup={oneGroup} />}
        </div>
        <div>          
          {/* <FindActivity /> */}
          <AddActivity groupId={oneGroup.id} />
        </div>

        <div>
          <ListMembers />
        </div>
        <Button title="Inscrever-se" handleClick={handlerClickSubscribe} />
        <Button title="Deixar grupo" handleClick={handlerClickUnsubscribe} />
      </Container>
    </>
  );
};

export default Group;
