import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 2px solid darkblue;
  padding: 5px;
  margin: 20px auto;
  border-radius: 25px;
  background: var(--st-patricks-blue);

  @media only screen and (min-width: 600px) {
    width: 80%;
  }
  @media only screen and (min-width: 800px) {
    width: 700px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const SectionBtn = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const BtnNavegation = styled.button`
  width: 100px;
  font-size: 15px;
  margin: 5px;
  border-radius: 15px;
`;
