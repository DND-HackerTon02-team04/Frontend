import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    
    *{
        box-sizing: border-box;
    }
    html,
    body{
        font-family: 'Raleway', sans-serif;
        font-weight: 300;
        margin:0;
        width: 100vw;
        height: auto;
        display:flex;
        align-items:center;
        justify-content:center;
        box-sizing: border-box;
        //background: -webkit-linear-gradient(-1deg, rgb(255, 248, 129), rgb(109, 237, 255));
        background: #4789B2;
        overflow: scroll;
    }
    a{
        text-decoration: none;
        color: #0f0f0f;
    }
    input{
        &:focus{
            outline:none;
        }
    }
`;

export default GlobalStyles;
