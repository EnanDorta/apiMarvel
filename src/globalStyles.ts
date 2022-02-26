import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
   background: #eee;
   font-family: 'Poppins', sans-serif; 
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; /* 15px */
    }

    @media (max-width: 720px) {
      font-size: 87.5%; /* 14px */
    }
  }

  button {
    cursor: pointer;
  }
`