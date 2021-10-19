//import { Button } from "@material-ui/core";
import Button from "../Button/index";
import { useContext, useState } from "react";
import { Container } from "./style";

const FindGroup = () => {
  const [text, setText] = useState("");
  const { getOneGroup, groups } = useContext();

  const handlerClickFinding = (text) => {
    const oneTime = groups.filter((group) => group.name === text);
    getOneGroup(oneTime.id);
  };

  return (
    <Container>
      <input
        type="text"
        value={text}
        onChange={() => setText((event) => event.target.value)}
      />
      <Button
        title="Procurar"
        type="click"
        handlerClick={() => handlerClickFinding(text)}
      />
    </Container>
  );
};

export default FindGroup;
