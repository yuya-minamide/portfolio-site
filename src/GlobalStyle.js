import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Alegreya:wght@400;500;600;700&display=swap");

  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  :root {
    --color-bg: #242235;
    --color-white: #fff;
    --color-orange: #fb8903;

    --transition: all 400ms ease;
  }
  html {
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  body {
    font-family: "Alegreya", serif;
    background: var(--color-bg);
    color: var(--color-white);
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 500;
  }

  h1 {
    font-size: 2.5rem;
  }

  a {
    color: var(--color-white);
    transition: var(--transition);
  }

  a:hover {
    color: var(--color-orange);
  }

  p {
    letter-spacing: 1px;
	  line-height: 1.5;
  }

  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
`;
