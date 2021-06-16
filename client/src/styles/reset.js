import "antd/dist/antd.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  *,
  *::after,
  *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }
  html {
      font-size: 62.5%;
  }
  body {
      font-size: 1.5rem;
      font-family: 'Poppins', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: 400;
      box-sizing: border-box;
  }
  a {
      text-decoration: none;
      &:active,
      &:focus,
      &:hover {
          text-decoration: none;
      }
  }
  .App {
    height: 100vh;
    width: 100%;
  }
`;

export default GlobalStyles;
