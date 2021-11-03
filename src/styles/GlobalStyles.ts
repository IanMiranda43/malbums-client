import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
		--primary: #FF7A00;
		--primary-hover: #ff8b21;
		--secondary: #642801;
		--background: #1a1a1a;
		--background-hover: #202327;
		--white: #D9D9D9;
		--gray: #3c3c3c;
		--light-gray: #7A7A7A;
		--outline: #2F3336;
		--green: #00C06B;
    --danger: #E8265E;
    --danger-hover: #e7396b;
    --transparent-hover: rgba(0,0,0,.1);
	}

  * {
    margin: 0;
    padding: 0;
    color: var(--white);
    box-sizing: border-box;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    height: 100%;
    width: 100%;
  }

  *, button, input {
    outline: none;
    -webkit-tap-highlight-color: transparent;
    border: 0;
    background: none;
    font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }

  button {
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
  }

  html {
    background: var(--background);
  }
`;
