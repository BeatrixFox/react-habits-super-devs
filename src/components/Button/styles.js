import styled from "styled-components";

export const ActionButton = styled.button`
    width: 200px;
    padding: 10px 30px;
    border: transparent;
    border-radius: 50px;
    
    background-image: linear-gradient(to right, #4b6cb7 0%, #182848  51%, #4b6cb7  100%);         
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 15px 0px #868B8E;    
    display: block;    

        :hover {
        background-position: right center; 
        color: #fff;
        text-decoration: none;
        }
         
`;