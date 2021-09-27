import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        /* --background: #F7F7F7; */
        --background: #f0f2f5;
        --green: #00D0B3;
        --text-title: #020202;
        --text-body: #969CB3;
        --black: #101010;
        --red: #E52E4D;
        --text-button: #212121;
        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea {
        font-weight: 400;
        font-family: 'Nunito', sans-serif;
    }

    input:focus {
    outline: none;
    border-color: var(--green);
    box-shadow: 0 0 5px var(--green);
  }

    h1, h2, button {
        font-weight: 800;
        font-family: 'Poppins', sans-serif;
    }

    h3, h4, h5, h6, strong {
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
    }

    `;
