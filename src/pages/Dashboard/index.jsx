import dashboardImg from "../../assets/img/clip-uniting-the-world.png";
import { Img } from "./style";
import Button from "../../components/Button/index.jsx";
import Header from "../../components/Header";

export const Dashboard = () => {
  const handleClickGroups = () => {
    console.log("handleClickGroups");
  };
  const handleClickHabits = () => {
    console.log("handleClickHabits");
  };
  const handleClickUpdUser = () => {
    console.log("handleClickUpdUser");
  };
  return (
    <>
      <Header titleMessage="Painel do SuperDev" />
      <Button handleClick={handleClickGroups} type="onClick" title="Grupos" />
      <Button handleClick={handleClickHabits} type="onClick" title="Hábitos" />
      <Button
        handleClick={handleClickUpdUser}
        type="onClick"
        title="Atualizar Cadastro"
      />

      <Img src={dashboardImg} alt="imagem dashboard" />
    </>
  );
};

export default Dashboard;
