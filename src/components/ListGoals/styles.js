import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid black;
  width: 300px;
  h4 {
    border-bottom: 2px solid black;
    background: var(--fire-opal);
    color: black;
  }
  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    li {
      text-align: left;
      width: 100%;
    }
  }
`;
