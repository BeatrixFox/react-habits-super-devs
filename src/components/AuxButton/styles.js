import styled from "styled-components";

export const Button = styled.button`
    width: 50px;
    padding: 5px 5px;
    border: transparent;
    border-radius: 10px;

    background-image: linear-gradient(
        to right,
        ${(props) =>
                props.title === "DEL"
                    ? "#f00"
                    : props.title === "INF"
                    ? "#5F82D3"
                    : "#297A4C"}
            0%,
        ${(props) =>
                props.title === "DEL"
                    ? "#F87788"
                    : props.title === "INF"
                    ? "#66C3FF"
                    : "#68A357"}
            51%,
        ${(props) =>
                props.title === "DEL"
                    ? "#f00"
                    : props.title === "INF"
                    ? "#5F82D3"
                    : "#297A4C"}
            100%
    );

    margin: 15px;
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
