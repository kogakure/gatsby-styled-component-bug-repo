import { createGlobalStyle } from "styled-components"

import { lightColors } from "./theme"

import globalCSS from "./global.css"

export const GlobalStyles = createGlobalStyle`
  body {
    background: green;
  }

  :root {
    --colorBackground: ${lightColors.background};
    --colorText: ${lightColors.text};
  }

  ${globalCSS}
`
