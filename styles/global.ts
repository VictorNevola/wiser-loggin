import { createGlobalStyle  } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;1,100;1,200&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #FAF5FF;
    color: #fff;
    -webkit-font-smoothing : antialised;
  }

  body, html, input, button {
    font-family: 'Montserrat','Roboto Slab', serif;
    font-size: 62.5%;
  }


    h1, h2, h3,h4,h5,h6, strong {
      font-weight: 500;

    }

  li, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }`
;