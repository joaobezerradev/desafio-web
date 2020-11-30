import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding:0;
    margin: 0;
    outline:0;
    box-sizing:border-box;
  }

  body {
  background: #002770;
  -webkit-font-smoothing: antialiased;
  color:#FFF;
  }

  body, input, button {
  font: 16px 'Roboto', serif;
  }

  button{
    cursor: pointer;
  }

`;
