import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: fit-content;

  div.menuContainer {
    align-items: center;
    /* position: relative; */
    display: flex;
    flex-direction: column;
  }

  div.userInfo h2 {
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;

    div.menuContainer {
      position: absolute;
      bottom: 0;
      left: 0;
      margin: 10px 0px 100px 30px;
      height: 280px;
      width: 325px;
    }

    div.btnMeusGrupos {
      position: absolute;
      top: 0;
      left: 0;
    }

    div.btnHabitos {
      position: absolute;
      top: 48%;
      transform: translateY(-50%);
    }

    div.btnUpdateUserProfile {
      position: absolute;
      bottom: 0;
      right: 0;
    }

    div.userInfo {
      position: absolute;
      margin: 30px;
      left: 0;
    }
  }

  @media only screen and (min-width: 1000px) {
    max-width: 700px;
    display: inline;
    div.menuContainer {
      width: 390px;
      margin: 10px 0px 150px 50px;
    }

    div.userInfo {
      margin: 50px;
    }
  }
`;

export const Img = styled.img`
  @media only screen and (min-width: 768px) {
    position: absolute;
    right: 0;
    width: 550px;
    top: 50%;
    transform: translateY(-33%);
    z-index: -1;
  }

  @media only screen and (min-width: 1000px) {
    width: 600px;
    height: 600px;
    top: 50%;
    transform: translateY(-33%);
    right: 10%;
  }
`;
