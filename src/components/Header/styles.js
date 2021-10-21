import styled from "styled-components";

export const HeaderDiv = styled.header`
  display: flex;
  align-items: center;
  background-color: var(--background-header);
  width: 100%;
  height: 20vh;
  position: sticky;

  h1 {
    display: none;
  }

  a {
    text-decoration: none;
    color: var(--platinum);
    font-size: small;
  }

  a.logoLink {
    position: relative;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
  }

  a.logoLink img {
    height: 90px;
    margin: 0px ​0px 10px 15px;

    &:hover {
      color: var(--baby-blue-eyes);
      transition: all 0.5s;
    }
  }

  div {
    position: absolute;
    max-height: 30px;
    display: flex;
    flex-direction: row;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  div button {
    margin: 0px 5px;
    width: max-content;
  }

  @media only screen and (min-width: 450px) {
    h1 {
      color: var(--font-color-header);
      font-family: sans-serif;
      display: flex;
      position: absolute;
      left: 51%;
      transform: translateX(-50%);
      font-size: 26px;
      width: min-content;
      text-align: center;
    }

    a.logoLink {
      left: 0;
      transform: unset;
      margin: 0 15px;
    }

    div {
      left: auto;
      transform: translateX(30px);
    }

    div button {
      margin: 0 15px;
    }
  }

  @media only screen and (min-width: 600px) {
    h1 {
      font-size: 32px;
      width: max-content;
    }
  }

  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 40px;
    }
  }

  @media only screen and (min-width: 1000px) {
    h1 {
      font-size: 46px;

      &:hover {
        font-size: 55px;
        transition: all 0.5s;
      }
    }

    a.logoLink img {
      height: 100px;
      margin-left: 15px;

      &:hover {
        transition: all 2s;
        transform: rotateZ(360deg);

        &::after {
          transition: all 0.5s;
        }
      }
    }
  }
`;

export const ButtonHeader = styled.button`
  font-family: Hack, monospace;
  margin: 15px;
  color: var(--platinum);
  cursor: pointer;
  padding: 5px;
  transition: all 0.5s;
  position: relative;
  align-self: flex-end;
  background-color: var(--st-patricks-blue);
  border: none;

  &:hover {
    background: var(--united-nations-blue);
    transition: all 0.5s;
    border-radius: 15px;
    box-shadow: 0px 6px 15px #0000ff61;
    padding: 5px;

    &::after {
      opacity: 1;
      transition: all 1.5s;
    }
  }
`;

export const Logout = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  margin: 15px;
  background-color: var(--background-header);
  border: none;
  color: var(--platinum);

  p {
    text-align: center;
    font-size: small;
  }

  svg {
    &:hover {
      width: 45px;
      height: 45px;
    }
  }

  @media only screen and (min-width: 450px) {
    svg {
      width: 35px;
      height: 35px;
    }
  }

  @media only screen and (min-width: 600px) {
    top: auto;
    margin: 30px;
  }
`;
