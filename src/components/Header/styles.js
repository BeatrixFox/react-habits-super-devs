import styled from "styled-components";

export const HeaderDiv = styled.header`
  display: flex;
  align-items: center;
  background-color: var(--background-header);
  width: 100%;
  height: 140px;

  h1 {
    color: var(--font-color-header);
    font-family: sans-serif;
    display: flex;
    position: absolute;
    left: 60%;
    transform: translateX(-50%);
    font-size: 4vw;

    &:hover {
      font-size: 5vw;
      transition: all 0.5s;
      text-align: right;
    }
  }

  a {
    text-decoration: none;
    color: var(--platinum);
  }

  div {
    position: relative;
    align-self: flex-end;
  }

  svg {
    width: 80px;
    height: 80px;
    margin: 15px;
    color: var(--platinum);
    position: relative;
    left: 0;
    font-weight: 100;

    &:hover {
      color: var(--baby-blue-eyes);
      transition: all 0.5s;
    }
  }

  @media only screen and (min-width: 800px) {
    h1 {
      font-size: 4.5vw;

      &:hover {
        font-size: 5vw;
        transition: all 0.5s;
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
      transition: all 0.5s;
    }
  }
`;

export const Logout = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0;
  margin: 20px;
  background-color: var(--background-header);
  border: none;

  svg {
    width: 35px;
    height: 35px;

    &:hover {
      width: 45px;
      height: 45px;
    }
  }
`;
