'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
//import AvenirNextLTProRegularWoff from '/static/fonts/AvenirNextLTPro-Regular.woff';
//import AvenirNextLTProBoldWoff from '/static/fonts/AvenirNextLTPro-Bold.woff';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 16,
  },
  palette: {
    text: {
        secondary: '#fff',
    },
  },
  components: {
    // Name of the component
    /*MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'AvenirNextLTPro';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('AvenirNextLTPro'), local('AvenirNextLTProRegular'), url(${AvenirNextLTProRegularWoff}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        },
        @font-face {
            font-family: 'AvenirNextLTPro';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('AvenirNextLTPro'), local('AvenirNextLTProBold'), url(${AvenirNextLTProBoldWoff}) format('woff');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
      `,
    },*/
    MuiPaper: {
      /*styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          padding: '30px',
        },
      },*/
      variants: [
        {
            props: { variant: 'padded' },
            /*style: {
                padding: '30px',
            },*/
            style: ({ ownerState, theme }) => ({
                padding: '30px',
                boxShadow: theme.shadows[ownerState.elevation]
            })
          },
      ]
    },
    MuiLink: {
        variants: [
          {
              props: { variant: 'HomeNav' },
              style: {
                  color: '#fff',
                  '&:hover': {
                    textDecoration: 'none',
                  }
              },
            },
        ]
      },
  },
});

export default theme;