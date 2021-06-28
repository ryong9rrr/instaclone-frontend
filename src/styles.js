import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  //blue
  accent: "#0095f6",
  borderColor: "rgb(219, 219, 219)",
  facebookColor: "#385285",
  footerColor: "#8e8e8e",
};

export const darkTheme = {
  //임시
  accent: "red",
  borderColor: "red",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}

    html {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    input {
      all: unset;
      background-color: #fafafa;
    }

    a {
      text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    body {
      background-color: #FAFAFA;
      font-size:14px;
      color: rgb(38, 38, 38);
    }
`;
