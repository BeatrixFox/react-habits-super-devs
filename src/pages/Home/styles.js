import styled from "styled-components";
import backgroundHome from "../../assets/img/homeImg.png";

export const Section = styled.section`
  background-image: url(${backgroundHome});
  background-size: 45vw;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 30% 95%;
  opacity: 70%;
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: flex-end;
    background-position: 60px 50%;
  }
  @media only screen and (min-width: 1024px) {
    background-position: 60px 32px;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  align-items: center;
  height: 100px;
  width: 300px;

  @media only screen and (min-width: 400px) {
  }
  @media only screen and (min-width: 800px) {
    height: 250px;
    margin-right: 15%;
    & div.login {
      position: absolute;
      right: 0;
      top: 0;
    }
    & div.signup {
      position: absolute;
      left: 0;
      bottom: 35%;
    }
  }
`;
