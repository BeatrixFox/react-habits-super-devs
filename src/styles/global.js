import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box; 
	outline: 0;
	text-decoration: none;
	border: none;
	list-style: none;
}
:root {
	// a definir paleta de cores.
	--background-page: var(--platinum);
	--background-header: var(--st-patricks-blue);
	/* --background-cards: */
	/* --background-button-normal: */
	/* --background-button-normal-hover: */
	/* --background-button-change: */
	/* --background-button-change-hover: */
	/* --background-button-delete: */
	/* --background-button-delete-hover: */
	/* --background-input: */
	/* --background-input-hover */
	/* --font-color-page: */
	/* --font-color-header: */
	/* --font-color-cards: */
	/* --font-color-button: */
	/* --font-color-input: */
	/* --font-color-links-visited: */

//CORES (https://coolors.co/282e7b-4889ea-649ff7-a1c2fc-e9605d-28a498-ebebeb):
	//branco 
	--platinum: #EBEBEB;
	//verde:
	--persian-green: #28A498;
	//vermelho:
	--fire-opal: #E9605D;
	//azul escuro:
	--st-patricks-blue: #282E7B;
	//azul claro:
	--united-nations-blue: #4889EA;
	//azul mais claro:
	--little-boy-blue: #649FF7;
	//azul bb:
	--baby-blue-eyes: #a1c2fc;

	--black: #000000;

}

body {
	background: var(--background-page);
	color: var(--black);
}

button {
	cursor: pointer;
}

`;

export default GlobalStyle;
