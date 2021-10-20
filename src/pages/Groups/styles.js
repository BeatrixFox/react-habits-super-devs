import styled from "styled-components";
import background from "../../assets/img/groups.png";

export const Container = styled.div`
  background-image: url(${background});
  background-size: 50vw;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  opacity: 70%;
  width: 80vw;
  height: 80vh;
  margin: 0 auto;

  @media only screen and (min-width: 1100px) {
    
    width: 800px;
  }
`;
