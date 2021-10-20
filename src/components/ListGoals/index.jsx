import { Container, Div } from "./styles";
import { useContext, useEffect } from "react";
import Button from "../Button/index";
import { GoalsHabitsApiContext } from "../../Providers/goalsHabitsApi/index";
import { GroupsContext } from "../../Providers/Groups";

const ListGoals = () => {
  const { oneGroup } = useContext(GroupsContext);
  const { goals, deleteGoal, updateGoal, getGoals } = useContext(
    GoalsHabitsApiContext
  );
  console.log("oneGroup: ", oneGroup);

  // useEffect(() => {
  //   getGoal(21);
  // }, []);
  const handleDelete = (goalId) => {
    deleteGoal(goalId);
  };
  const handleUpdate = (goalId) => {
    updateGoal(goalId);
  };

  return (
    <>
      <h3>METAS</h3>
      {console.log(goals)}
    </>
  );
};

export default ListGoals;
