import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import theme from './theme';
import { News1, News2 } from './components/News.js'
import Paper from '@mui/material/Paper';
import HomeNews from './components/HomeNews.js'
import Grid from '@mui/material/Grid';

export default async function HomePage() {
    "use server";
    return (
        <main>
            <HomeNews>
                <Grid container spacing={2} sx={{ position: 'relative', }}>
                    <Grid item xs={12}>
                        <h2>Latest News</h2>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <News1 />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <News2 />
                    </Grid>
                </Grid>
            </HomeNews>
            <Grid container spacing={2} sx={{ position: 'relative', marginBottom: '20px' }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper variant="padded" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper variant="padded" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper variant="padded" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper variant="padded" />
                </Grid>
            </Grid>

            <Paper variant="padded" >
                <Grid container spacing={2} sx={{ position: 'relative', marginBottom: '20px' }}>
                    <Grid item xs={12} sm={6}>
                        <h3>About</h3>
                        <p>The Society for Free Radical Research founded in the United Kingdom in 1982 is an International Society with the following rules (as amended by resolution of the members dated September 11, 1998). The International Society is a charitable voluntary, non-profit making institution.</p>
                        <p>The object of the International Society is to advance education in free radical processes with particular reference to those of industrial and medical importance, such education being for the benefit of the public.</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper variant="padded" />
                    </Grid>
                    <Grid item xs={12}>
                        <h3>Objectives</h3>
                        <ul>
                            <li>to provide continuing education and training to scientists with an active interest in Free Radical Research</li>
                            <li>to provide a forum for discussions</li>
                            <li>to receive and apply donations, subscriptions and funds from persons or organizations</li>
                            <li>to invest and deal with the International Society's money not immediately required for its objects in or upon any investments, securities or property;</li>
                            <li>to do all other lawful things necessary to advance the object</li>
                            <li>to promote research and publication of its beneficial findings</li>
                        </ul>
                    </Grid>
                </Grid>
            </Paper>

        </main>
    );
}