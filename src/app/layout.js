import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';
//import { AppBar, Toolbar } from "@mui/material";
import DrawerAppBar from './components/DrawerAppBar.js'
import { Container, Box, Typography, Link, Toolbar } from "@mui/material";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '11px',}}>
            {'Copyright © '}
                Society for Free Radical Research International{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Society for Free Radical Research International",
    description: "The object of the International Society is to advance education in free radical processes with particular reference to those of industrial and medical importance, such education being for the benefit of the public.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
            //className={inter.className}
            >
                <AppRouterCacheProvider options={{ key: 'css' }}>
                    <ThemeProvider theme={theme}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: '100vh',
                            }}
                        >
                            <CssBaseline />
                            <div id="blueBg" />
                            <DrawerAppBar
                                sx={{
                                    height: '280px',
                                }}
                            />
                            {/*<AppBar sx={{display: {xs: 'block', lg: 'none'}}} />
                        <Toolbar  sx={{display: {xs: 'none', lg: 'block'}}}/>*/}
                            <Container maxWidth="lg" sx={{ marginTop: '15px', }}>
                                {children}
                            </Container>
                            <Box
                                component="footer"
                                sx={{
                                    py: 3,
                                    px: 2,
                                    mt: 'auto',
                                    //backgroundColor: backgroundColor(theme),
                                    backgroundColor: '#111',
                                    marginTop: '20px',
                                }}
                            >
                                <Container maxWidth="lg">
                                    <Typography variant="body1">
                                        My sticky footer can be found here.
                                    </Typography>
                                    <Copyright />
                                </Container>
                            </Box>
                        </Box>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
