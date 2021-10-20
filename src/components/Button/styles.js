import styled from "styled-components";

export const ActionButton = styled.button`
  width: 200px;
  padding: 10px 30px;
  border: transparent;
  border-radius: 50px;

  background-image: linear-gradient(
    to right,
    var(--st-patricks-blue) 0%,
    var(--united-nations-blue) 51%,
    var(--st-patricks-blue) 100%
  );
  margin: 15px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: var(--platinum);
  box-shadow: 0 0 15px 0px #868b8e;
  display: block;

  :hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;
