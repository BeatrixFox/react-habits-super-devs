import dashboardImg from "../../assets/img/clip-uniting-the-world.png";
import { Img } from "./styles";
import Button from "../../components/Button/index.jsx";
import { Redirect, useHistory } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../Providers/User";
import UpdateUserProfile from "../../components/UpdateUserProfile/index";

const Dashboard = () => {
  const { authorized } = useContext(UserContext);
  const history = useHistory();

  const handleClickMyGroups = () => {
    history.push("/my_groups");
  };
  const handleClickHabits = () => {
    history.push("/habits");
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
