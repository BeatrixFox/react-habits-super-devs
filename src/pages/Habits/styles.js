import styled from "styled-components";
import background from "../../assets/img/habits.png";

export const Container = styled.div`
  background-image: url(${background});
  background-size: 50vw;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-position: right;
  background-position-y: 120px;
  opacity: 70%;
  width: 80vw;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media only screen and (min-width: 1100px) {
    height: 100vh;
    width: 90vw;
    section {
      margin: 50px 10px;
    }
  }
`;
