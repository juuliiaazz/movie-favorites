import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
:root {
  --color-primary: #ff723a;
  --color-primary-light: #ff9142;
  --color-text: #dee2e6;
  --color-text-dark: #adb5bd;
  --color-background-100: #343a40;
  --color-background-500: #2b3035;
  --color-background-900: #212529;
  --color-red: #fa5252;
  --color-red-dark: #e03131;


}

/* --color-background-100: #343a40;
  --color-background-500: #2b3035;
  --color-background-900: #212529; */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  color: var(--color-text);
  background-color: var(--color-background-900);
  
}



`;

export default GlobalStyles;
