import { Container } from "./style";
import Button from "../../components/Button/index";
import { Redirect } from "react-router";
import { useContext } from "react";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";
import Header from "../../components/Header";

export const Groups = () => {
  const { authorized } = useContext(UserHabitsApiContext);

  const handleClickAddGroup = () => {
    console.log("handleClickAddGroup");
  };
  const handleClickSearch = () => {
    console.log("handleClickSearch");
  };

  if (!authorized) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      <Header titleMessage="Grupos" />

      <Container>
        <div>Aqui vai o maps com carts dos grupos</div>
        <Button
          handleClick={handleClickAddGroup}
          type="click"
          title="Novo Grupo"
        />
        <Button handleClick={handleClickSearch} type="click" title="Procurar" />
      </Container>
    </>
  );
};

export default Groups;
