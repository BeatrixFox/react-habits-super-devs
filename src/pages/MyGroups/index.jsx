import { Container } from "./style";
import Button from "../../components/Button/index";
import Header from "../../components/Header";

export const MyGroups = () => {
  const handleClickSearch = () => {
    console.log("handleClickSearch");
  };
  return (
    <>
      <Header titleMessage="Meus Grupos" />

      <Container>
        <div>Aqui vai o maps com carts</div>
        <Button
          handleClick={handleClickSearch}
          type="onClick"
          title="Procurar"
        />
      </Container>
    </>
  );
};
