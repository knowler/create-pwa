import palx from 'palx'

export const theme = {
  colors: palx('#91dcc5'),
}

export const globalStyles = {
  '*': { boxSizing: 'border-box' },
  body: {
    backgroundColor: theme.colors.cyan[1],
    color: theme.colors.cyan[9],
    fontFamily: 'sans-serif',
    margin: 0,
  },
  main: { paddingRight: '1rem', paddingLeft: '1rem' },
  h1: { fontWeight: 300 },
}

export default theme
