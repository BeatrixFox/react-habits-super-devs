import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    

    & div {
        display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    }

    @media only screen and (min-width: 400px) {

        width: 400px;
    }
    @media only screen and (min-width: 800px) {

        width: 800px;
        justify-content: space-around;
    }

`;
