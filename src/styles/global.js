import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	outline: 0;
}
:root{
	// a definir paleta de cores.
	--background-geral: #f2f2f2ff;
	--details: #566EC6;
	--input-basic: #C4C4C4;
	--button-accepted: #BDE8FB 
	--button-change: #2C702A;
	--aba-color: #DC5151;
	--button-delete: #B70000;
	--backgroud-back-cards: #66DFE7;


	--xiketic: #121420ff;
	--rosewood: #65010cff;
	--venetian-red: #cb1b16ff;
	--prussian-blue: #033270ff;
	--sapphire-blue: #1368aaff;
	--green-blue-crayola: #4091c9ff;
	--light-cornflower-blue: #9dcee2ff;
	--dark-salmon: #f29479ff;
	--tomato: #f26a4fff;
	
}
body{
	background: rgb(3,50,112);
	background: linear-gradient(180deg, rgba(3,50,112,1) 0%, rgba(203,27,22,1) 100%);
	color: var(--black);
}

button{
	cursor: pointer;
}

`;
