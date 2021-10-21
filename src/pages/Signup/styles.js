import styled from "styled-components";
import backgroundOffice from "../../assets/img/signupImg.png";

export const Container = styled.div`
  background-image: url(${backgroundOffice});
  background-size: 50vw;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 20% 95%;
  opacity: 70%;
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: right;
  form {
    width: 80%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    input {
      width: 100%;
      padding: 10px;
      font-size: 1rem;
      margin: 6px;
      border: 2px solid darkblue;
      border-radius: 5px;
      background: var(--baby-blue-eyes);
      &::placeholder {
        color: var(--st-patricks-blue);
        font-weight: bold;
      }
    }
  }
  @media (min-width: 600px) {
    form {
      width: 330px;
      margin: 20px;
    }
  }
`;
