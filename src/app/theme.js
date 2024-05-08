'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import localFont from 'next/font/local'
 
// Font files can be colocated inside of `app`
const avenir = localFont({
  src: '../../public/static/fonts/AvenirNext/AvenirNextCyr-Bold.woff2',
  display: 'swap',
})

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 16,
    h1: {
      fontFamily: avenir.style.fontFamily,
    },
    h2: {
      fontFamily: avenir.style.fontFamily,
      fontSize: '1.875rem',
      letterSpacing: '-2px',
      marginBottom: '20px',
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: avenir.style.fontFamily,
      fontSize: '3rem',
      letterSpacing: '-3px',
    },
    h4: {
      fontFamily: avenir.style.fontFamily,
      fontSize: '1.375rem',
      letterSpacing: '-1px',
      marginBlockStart: '1.33em',
      marginBlockEnd: '1.33em',
    },
  },
  palette: {
    text: {
        secondary: '#fff',
    },
  },
  components: {
    // Name of the component
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
                borderRadius: '3px',
                boxShadow: theme.shadows[ownerState.elevation],
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