import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid black;
  width: 300px;
  background: var(--little-boy-blue);
  border-radius: 20px;
  margin: 10px auto;
  h4 {
    padding: 10px;
    font-size: 30px;
    text-align: center;
    background: var(--fire-opal);
    border-radius: 20px 20px 0 0;
  }
  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    li {
      text-align: center;
      width: 50%;
      border: 1px dotted var(--platinum);
    }
  }
  @media (min-width: 900px) {
    width: 600px;
  }
`;
