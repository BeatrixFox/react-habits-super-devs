import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    /* margin: 0 auto; */
    width: 40%;
    max-width: 450px;
    height: 300px;
    background-color: var(--st-patricks-blue);
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    margin-top: 12vh;
  }

  input {
    margin: 25px;
    height: 45px;
    width: 70%;
    border-radius: 10px;
    text-align: center;
    background-color: var(--baby-blue-eyes);
    border: 2px solid var(--united-nations-blue);

    &:hover {
      border: 2px solid var(--platinum);
    }
  }

  p {
    color: var(--platinum);
  }

  button {
    margin-top: 20px;
  }

  @media only screen and (min-width: 800px) {
    button {
      position: absolute;
      right: 0;
      display: flex;
      justify-content: center;
      top: 55%;
      left: 72%;
    }

    div {
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
    }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  background-color: var(--baby-blue-eyes);
  padding: 10px;
  width: 220px;
  margin: 0 auto;
  border-radius: 15px;

  @media only screen and (min-width: 800px) {
    display: flex;
    position: absolute;
    top: 55%;
    right: 72%;
  }
`;
