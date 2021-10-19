import Button from "../Button";
import { useContext, useState } from "react";
import { Container } from "./styles";
import { GroupsContext } from "../../Providers/Groups";

const FindGroup = () => {
  const [text, setText] = useState("");
  const { getOneGroups, groups } = useContext(GroupsContext);

  const handlerClickFinding = (text) => {
    const oneTime = groups.filter((group) => group.name === text);
    getOneGroups(oneTime.id);
  };

  return (
    <Container>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button
        title="Procurar"
        type="click"
        handleClick={() => handlerClickFinding(text)}
      />
    </Container>
  );
};

export default FindGroup;
