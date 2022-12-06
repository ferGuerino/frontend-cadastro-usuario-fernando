import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --color-primary: #ff577f;  
  --color-primary-focus: #ff427f;
  --color-primary-negative: #59323f;

  --color-negative: #E83F5B;  
  --color-sucess: #3FE864
  

  --gray-4: #121214;
  --gray-3: #212529;
  --gray-2: #343B41;
  --gray-1: #868E96;
  --gray-0: #F8F9F4;
  --white: #ffffff;

  
  --font-size-1: 1rem;
  --font-size-2: 0.875rem;
  --font-size-3: 0.75rem;

  --font-bold: 700;   
  --font-semibold: 600; 
  --font-regular: 400;

  --border-radius-1: 4px;
  --border-radius-2: 8px;

}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: #121214;
  }
  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }
  a {
    color: unset;
    text-decoration: none;
  }
  ul,
  ol,
  li {
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  span,
  li,
  label,
  button,
  input {
    font-family: "Inter", sans-serif;
  }

`;
