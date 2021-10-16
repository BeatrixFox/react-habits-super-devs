import { Container } from "./style";
import Button from "../../components/Button/index";

export const MyGroups = () => {
  const handleClickSearch = () => {
    console.log("handleClickSearch");
  };
  return (
    <Container>
      <div>Aqui vai o maps com carts</div>
      <Button handleClick={handleClickSearch} type="onClick" title="Procurar" />
    </Container>
  );
};
