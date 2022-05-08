import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --font1:"Roboto", sans-serif;
        --font2:"Righteous", cursive;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
        font-family: var(--font1);
    }
`;

export default GlobalStyle;
