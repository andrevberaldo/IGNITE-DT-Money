import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f2f0f5;
        --red: #e52e4d;
        --green: #33cc95;
        --blue: #5429cc;
        --blue-light: #6933FF;
        --text-title: #363f5f;
        --text-body: #969Cb3;
        --shape: #fff;
        --input-background: #E7E9EE;
        --input-border-color: #d7d7d7;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        // se a tela do usuario for até 1080px
        @media (max-width: 1080px) {
            font-size: 93.75%; // 16px * 0.9375 = 15px
        }

        // se a tela do usuario for até 720px
        @media (max-width: 720px) {
            font-size: 87.5%; // 16px * 0.875 = 14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    
    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top:0;
        bottom:0;
        right: 0;
        left: 0;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .react-modal-content {
        width: 100%;
        max-width: 586px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.24rem;
    }

    .react-modal-close {
        border: 0;
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        background: transparent;

        transition: filter .2s;

        &:hover {
            filter: brightness(0.8);
        }

    }
`