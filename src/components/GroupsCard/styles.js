import styled from "styled-components";

export const Div = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid black;
  width: 85%;
  margin: 10px auto;
  border-radius: 20px;
  background: var(--baby-blue-eyes);
  height: 150px;
  & p {
    text-transform: uppercase;
    padding: 10px;
    height: 60px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: var(--st-patricks-blue);
    border-bottom: 2px solid var(--united-nations-blue);
  }
  & span {
    overflow: hidden;
    text-overflow: ellipsis;
    height: 20px;
    white-space: nowrap;
    max-width: 90%;
    margin: 2px 10px;
  }
  & button {
    height: 30px;
    font-size: 15px;
    border-radius: 0px 0px 20px 20px;
  }
  @media (min-width: 800px) {
    width: 205px;
    margin: 10px;
  }
`;
