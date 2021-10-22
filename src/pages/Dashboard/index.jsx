import dashboardImg from "../../assets/img/clip-uniting-the-world.png";
import { Img, Section } from "./styles";
import Button from "../../components/Button/index.jsx";
import { Redirect, useHistory } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../Providers/User";
import UpdateUserProfile from "../../components/UpdateUserProfile/index";

const Dashboard = () => {
  const { authorized, actualUser } = useContext(UserContext);
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
    <Section>
      <div className="userInfo">
        <h2>Bem vindo!</h2>
        <h4>Seus dados:</h4>
        <p>Nome: {actualUser.name}</p>
        <p>Email: {actualUser.email}</p>
      </div>

      <div className="menuContainer">
        <div className="btnMeusGrupos">
          <Button
            handleClick={handleClickMyGroups}
            type="click"
            title="Meus Grupos"
          />
        </div>
        <div className="btnHabitos">
          <Button
            handleClick={handleClickHabits}
            type="click"
            title="Hábitos"
          />
        </div>
        <div className="btnUpdateUserProfile">
          <UpdateUserProfile />
        </div>
      </div>

      <Img src={dashboardImg} alt="imagem dashboard" />
    </Section>
  );
};

export default Dashboard;
