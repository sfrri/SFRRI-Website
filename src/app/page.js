'use client';
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
import { ImageLink } from './components/ImageLink';
import GMap from './components/GMap';

const imageLinkArr = [
    { linkName: 'Related Meetings', bgImgUrl: '/static/images/Blood_clot_in_scanning_electron_microscopy.jpg', },
    { linkName: 'Membership', bgImgUrl: '/static/images/BioProbes.jpg', },
    { linkName: 'History', bgImgUrl: '/static/images/TrevorSlater.jpg', },
    { linkName: 'Careers & Training', bgImgUrl: '/static/images/OxRadStress.jpg' },
]

export default async function HomePage() {
    //"use server";
    return (
        <main>
            <HomeNews sx={{ borderRadius: '3px',}}>
                <Grid container spacing={1} sx={{ position: 'relative', borderRadius: '3px',}}>
                    <Grid item xs={12}>
                        <h2 style={{fontSize: '3rem', letterSpacing: '-3px',}}>Latest News</h2>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <News1 />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <News2 />
                    </Grid>
                </Grid>
            </HomeNews>
            <Grid container spacing={1.25} sx={{ position: 'relative', marginBottom: '10px' }}>
                {imageLinkArr.map( linkItem => {
                    return <Grid item xs={12} sm={6} md={6} lg={3} key={linkItem.linkName}>
                        <ImageLink linkName={linkItem.linkName} bgImgUrl={linkItem.bgImgUrl} />
                    </Grid>
                })}
            </Grid>
            <Paper variant="padded" sx={{borderRadius: '3px',}}>
                <Grid container spacing={1} sx={{ position: 'relative', marginBottom: '10px' }}>
                    <Grid item xs={12} sm={6}>
                        <h3>About</h3>
                        <p>The Society for Free Radical Research founded in the United Kingdom in 1982 is an International Society with the following rules (as amended by resolution of the members dated September 11, 1998). The International Society is a charitable voluntary, non-profit making institution.</p>
                        <p>The object of the International Society is to advance education in free radical processes with particular reference to those of industrial and medical importance, such education being for the benefit of the public.</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <GMap />
                    </Grid>
                    <Grid item xs={12}>
                        <h3>Objectives</h3>
                        <ul>
                            <li>to provide continuing education and training to scientists with an active interest in Free Radical Research</li>
                            <li>to provide a forum for discussions</li>
                            <li>to receive and apply donations, subscriptions and funds from persons or organizations</li>
                            <li>to invest and deal with the International Society&apos;s money not immediately required for its objects in or upon any investments, securities or property;</li>
                            <li>to do all other lawful things necessary to advance the object</li>
                            <li>to promote research and publication of its beneficial findings</li>
                        </ul>
                    </Grid>
                </Grid>
            </Paper>
        </main>
    );
}