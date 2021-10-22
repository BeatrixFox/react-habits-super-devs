import styled from "styled-components";

export const Container = styled.section`
  background: var(--little-boy-blue);
  border-radius: 20px;
  width: 90%;
  margin: 10px auto;
  h4 {
    padding: 10px;
    font-size: 30px;
    text-align: center;
    background: var(--fire-opal);
    border-radius: 20px 20px 0 0;
  }
  @media (min-width: 900px) {
    width: 600px;
  }
`;

export const Content = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin: 10px auto;

  li {
    color: var(--platinum);
    p {
      font-size: 15px;
      padding: 10px;
    }
  }
  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    li {
      width: 50%;
    }
  }
  @media (min-width: 900px) {
    width: 500px;
  }
`;
