import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box
    }

    body {
        background: #8c11be;
        font-family: 'Raleway', sans-serif;
        padding: 25px;
        margin: 0;
        overflow: hidden;
    }

    h1 {
        font-size: 32px;
        font-weight: 400;
        font-family: 'Saira Stencil One', cursive;
        color: #FFFFFF;
        margin-bottom: 28px; 
    }

    input {
        width: 100%;
        height: 58px;
        color: #000000;
        background-color: #FFFFFF;
        font-size: 20px;
        font-weight: 400;
        font-family: 'Raleway', sans-serif;
        text-decoration: none;
        border: none;
        border-radius: 5px;
        margin-bottom: 13px;
        padding: 16px;
    }

    a {
        font-size: 15px;
        font-weight: 700;
        font-family: 'Raleway', sans-serif;
        color: #FFFFFF;
        text-decoration: none;
        margin-top: 34px;
    }

    button {
        width: 100%;
        height: 46px;
        font-size: 20px;
        font-weight: 700;
        font-family: 'Raleway', sans-serif;
        color: #FFFFFF;
        background-color: #A328D6;
        border: none;
        border-radius: 5px;
        padding: 12px;
        cursor: pointer;
    }
`
export default GlobalStyle;
