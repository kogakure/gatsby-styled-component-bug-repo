import React from "react"
import { ThemeProvider } from "styled-components"
import { Normalize } from "styled-normalize"

import { GlobalStyles } from "./src/global-styles"
import { lightTheme } from "./src/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={lightTheme}>
    <Normalize />
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
