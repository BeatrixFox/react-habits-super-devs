import styled from "styled-components";

export const HeaderDiv = styled.header`
  display: flex;
  align-items: center;
  background-color: cornflowerblue;
  width: 100%;
  margin: 0;

  h1 {
    color: whitesmoke;
    font-family: sans-serif;
    display: flex;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    &:hover {
      font-size: 2.5rem;
      transition: all 0.5s;
    }
  }

  a {
    text-decoration: none;
  }

  svg {
    width: 80px;
    height: 80px;
    margin: 15px;
    color: whitesmoke;
    position: relative;
    left: 0;

    &:hover {
      color: #1b6afc;
      transition: all 0.5s;
    }
  }
`;

export const Link = styled.button`
  font-family: Hack, monospace;
  margin: 15px;
  color: #ffffff;
  cursor: pointer;
  padding: 5px;
  transition: all 0.5s;
  position: relative;
  align-self: flex-end;
  background-color: cornflowerblue;
  border: none;

  &:hover {
    background: #1b6afc;
    transition: all 0.5s;
    border-radius: 5px;
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
  background-color: cornflowerblue;
  border: none;

  svg {
    color: white;
    width: 35px;
    height: 35px;
  }
`;
