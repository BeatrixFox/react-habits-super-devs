import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid black;
  width: 85%;
  margin: 10px auto;

  background: var(--baby-blue-eyes);
  p {
    text-align: center;
    padding: 10px;
  }
  & span {
    overflow: hidden;
    text-overflow: ellipsis;
    height: 20px;
    white-space: nowrap;
    max-width: 90%;
    margin: 2px 10px;
  }
  /* border: 1px black solid; */
`;

export const Container = styled.div`
  /* border: 1px black solid; */
`;
