import dashboardImg from "../../assets/img/clip-uniting-the-world.png";
import { Img } from "./style";
import Button from "../../components/Button/index.jsx";
import { Redirect, useHistory } from "react-router";
import { useContext } from "react";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";

export const Dashboard = () => {
  const { authorized } = useContext(UserHabitsApiContext);
  const history = useHistory();

  const handleClickGroups = () => {
    history.push("/groups/");
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
      <Button handleClick={handleClickGroups} type="click" title="Grupos" />
      <Button handleClick={handleClickHabits} type="click" title="Hábitos" />
      <Button
        handleClick={handleClickUpdUser}
        type="click"
        title="Atualizar Cadastro"
      />

      <Img src={dashboardImg} alt="imagem dashboard" />
    </>
  );
};

export default Dashboard;
