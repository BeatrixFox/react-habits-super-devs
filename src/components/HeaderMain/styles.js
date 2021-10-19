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
    font-size: 2.5rem;

    &:hover {
      font-size: 3.5rem;
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
