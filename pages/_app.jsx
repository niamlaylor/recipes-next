import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../components/footer/Footer';

// STYLEOVERRIDES used to ignore specific components from Print view
const theme = createTheme({
  components: {
    MuiCardMedia: {
      styleOverrides: {
        root: {
          "@media print": {
            display: "none"
          }}}},
    MuiAppBar: {
      styleOverrides: {
        root: {
          "@media print": {
            display: "none"
          }}}},
    MuiIconButton: {
      styleOverrides: {
        root: {
          "@media print": {
            display: "none"
          }}}}
  },

  palette: {
    //Main colour, dark brown
    primary: {
      main: '#542307'
    },
    //Secondary colour, light brown
    secondary: {
      main: '#DCCCC0'
    }
  },
  //Nunito Sans font
  typography: {
    fontFamily: 'Nunito Sans',
    fontWeightRegular: 400,
    fontWeightBold: 700
  }
});

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <Footer />
      </ThemeProvider>
    </SessionProvider>
  )
}