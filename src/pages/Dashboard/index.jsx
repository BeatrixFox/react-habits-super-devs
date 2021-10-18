import dashboardImg from "../../assets/img/clip-uniting-the-world.png";
import { Img } from "./style";
import Button from "../../components/Button/index.jsx";
<<<<<<< HEAD
import { Redirect, useHistory } from "react-router";
import { useContext } from "react";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";

=======
import Header from "../../components/Header";
>>>>>>> e4dfcb87240e46b6ffd7255f5aa729bfa08f9bca
export const Dashboard = () => {
  const { authorized } = useContext(UserHabitsApiContext);
  const history = useHistory();

  const handleClickGroups = () => {
    history.push("/groups");
  };
  const handleClickHabits = () => {
    history.push("/habits");
  };
  const handleClickUpdUser = () => {
    console.log("handleClickUpdUser");
  };

  if (!authorized) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Header titleMessage="Painel do SuperDev" />
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
