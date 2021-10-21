import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 2px solid darkblue;
  padding: 5px;
  margin: 20px auto;
  border-radius: 25px;
  background: var(--baby-blue-eyes);

  @media only screen and (min-width: 400px) {
    width: 400px;
  }
  @media only screen and (min-width: 800px) {
    width: 800px;
    justify-content: space-around;
  }
`;
