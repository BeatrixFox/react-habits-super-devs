import styled from "styled-components";
import background from "../../assets/img/group.png";

export const Container = styled.div`
  background-image: url(${background});
  background-size: 50vw;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  opacity: 70%;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center;
  h1 {
    margin-top: 10px;
  }
  p {
    font-size: 2rem;
  }
  @media (min-width: 1000px) {
  }
`;
