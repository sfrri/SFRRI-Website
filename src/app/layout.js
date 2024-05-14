//import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import DrawerMenuAppBar from './components/DrawerMenuAppBar.js';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Footer from './components/Footer.js';
import NewsConditional from "./components/NewsConditional";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '11px',}}>
            {'Copyright © '}
                Society for Free Radical Research International{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Society for Free Radical Research International",
    description: "The object of the International Society is to advance education in free radical processes with particular reference to those of industrial and medical importance, such education being for the benefit of the public.",
};

export default function RootLayout({ children }) {
    return (
        <>
            <html lang="en">
                <body
                //className={inter.className}
                // className={avenir.className}
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
                                <DrawerMenuAppBar sx={{ height: '280px', }} />

                                <NewsConditional><>{children}</></NewsConditional>

                                <Box component="footer">
                                    <Footer />
                                    <Box
                                        sx={{
                                            py: 3,
                                            px: 2,
                                            mt: 'auto',
                                            //backgroundColor: backgroundColor(theme),
                                            backgroundColor: '#111',
                                        }}
                                    >
                                        <Container maxWidth="lg">
                                            <Copyright />
                                        </Container>
                                    </Box>
                                </Box>
                            </Box>
                        </ThemeProvider>
                    </AppRouterCacheProvider>
                </body>
            </html>
        </>
    );
}
