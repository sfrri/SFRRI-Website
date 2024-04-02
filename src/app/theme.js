'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

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