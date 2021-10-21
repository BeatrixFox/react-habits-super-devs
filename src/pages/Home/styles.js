import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column-reverse;

  div.imgBox {
    width: min-content;
    position: absolute;
    align-self: center;
    bottom: 0;
  }

  div.imgBox img {
    height: 320px;
  }

  @media only screen and (min-width: 450px) {
    div.imgBox img {
      height: 360px;
    }
  }

  @media only screen and (min-width: 600px) {
    div.imgBox img {
      height: 420px;
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;

    div.imgBox {
      position: relative;
      height: fit-content;
      margin-top: 40px;
    }
    div.imgBox img {
      height: 470px;
    }
  }

  @media only screen and (min-width: 850px) {
    div.imgBox img {
      height: 520px;
    }
  }

  @media only screen and (min-width: 1000px) {
    div.imgBox {
      margin-right: 60px;
    }

    div.imgBox img {
      height: 650px;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  align-items: center;
  margin-top: 25px;

  @media only screen and (min-width: 768px) {
    display: flex;
    align-self: center;
    height: 175px;
    width: 280px;

    & div.login {
      position: absolute;
      top: 0;
      right: 0;
    }

    & div.signup {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  @media only screen and (min-width: 1000px) {
    height: 200px;
    width: 320px;
  }
`;
