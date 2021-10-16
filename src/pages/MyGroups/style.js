import styled from "styled-components";
import background from "../../assets/img/my_groups.png";

export const Container = styled.div`
  background-image: url(${background});
  background-size: 15vw;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  -moz-background-origin: scaleX(-1);
  opacity: 70%;
  width: 80vw;
  height: 80vh;
`;
