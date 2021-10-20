import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--background-page);

  & div > figure {
    text-align: center;
  }

  @media only screen and (min-width: 400px) {
  }

  @media only screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

export const Img = styled.img`
  width: 70%;

  &:hover {
    opacity: 80%;
    transition: 0.8s;
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
