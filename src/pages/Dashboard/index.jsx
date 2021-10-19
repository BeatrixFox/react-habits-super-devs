import dashboardImg from "../../assets/img/clip-uniting-the-world.png";
import { Img } from "./style";
import Button from "../../components/Button/index.jsx";
import { Redirect, useHistory } from "react-router";
import { useContext } from "react";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";
import UpdateUserProfile from '../../components/UpdateUserProfile/index';

const Dashboard = () => {
  const { authorized } = useContext(UserHabitsApiContext);
  const history = useHistory();

  const handleClickMyGroups = () => {
    history.push("/my_groups/");
  };
  const handleClickHabits = () => {
    history.push("/habits/");
  };
  const handleClickUpdUser = () => {
    console.log("handleClickUpdUser");
  };

  if (!authorized) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Button
        handleClick={handleClickMyGroups}
        type="click"
        title="Meus Grupos"
      />
      <Button handleClick={handleClickHabits} type="click" title="Hábitos" />

      <UpdateUserProfile />      

      <Img src={dashboardImg} alt="imagem dashboard" />
    </>
  );
};

export default Dashboard;
