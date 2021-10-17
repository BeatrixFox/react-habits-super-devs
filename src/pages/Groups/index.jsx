import { Container } from "./style";
import Button from "../../components/Button/index";
import { Redirect } from "react-router";
import { useContext } from "react";
import { UserHabitsApiContext } from "../../Providers/userHabitsApi";

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
    <Container>
      <div>Aqui vai o maps com carts dos grupos</div>
      <Button
        handleClick={handleClickAddGroup}
        type="onClick"
        title="Novo Grupo"
      />
      <Button handleClick={handleClickSearch} type="onClick" title="Procurar" />
    </Container>
  );
};

export default Groups;
