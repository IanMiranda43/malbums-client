import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
		--background: #1a1a1a;
		--light-gray: #202327;
		--white: #D9D9D9;
		--gray: #7A7A7A;
		--outline: #2F3336;
		--green: #00C06B;
		--like: #E8265E;
		--primary: #FF7A00;
		--primary-hover: #ff8b21;
		--dark-hover: #642801;
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
    font-family: -apple-system, system-ui BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
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
