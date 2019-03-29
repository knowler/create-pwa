import React, { Component } from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import theme, { globalStyles } from '@theme'

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <main>
          <h1>PWA</h1>
        </main>
      </ThemeProvider>
    )
  }
}

export default App
