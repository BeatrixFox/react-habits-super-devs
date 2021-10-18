import { Container } from "./style";
import Button from "../../components/Button/index";
import Header from "../../components/Header";

export const Groups = () => {
  const handleClickAddGroup = () => {
    console.log("handleClickAddGroup");
  };
  const handleClickSearch = () => {
    console.log("handleClickSearch");
  };
  return (
    <>
      <Header titleMessage="Grupos" />

      <Container>
        <div>Aqui vai o maps com carts dos grupos</div>
        <Button
          handleClick={handleClickAddGroup}
          type="onClick"
          title="Novo Grupo"
        />
        <Button
          handleClick={handleClickSearch}
          type="onClick"
          title="Procurar"
        />
      </Container>
    </>
  );
};
