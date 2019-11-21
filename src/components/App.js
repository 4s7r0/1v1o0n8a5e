import React from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import { color, width } from "styled-system"
import theme from "../settings/theme"
import resetStyles from "../settings/reset.styles"
import globalFonts from "../settings/global.fonts"
import globalStyles from "../settings/global.styles"
import SidebarMenu from "../components/SidebarMenu"

const GlobalStyle = createGlobalStyle`
${resetStyles}
${globalStyles}
${globalFonts}
`

const AppWrapper = styled.div`
  min-height: 100vh;
  padding: 0;
  margin: 0;
  ${width}
  ${color}
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrapper
        className='App'
        color={theme.global.colors.brand}
        bg={theme.global.colors.bg_silver}
      >
        <SidebarMenu />
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
