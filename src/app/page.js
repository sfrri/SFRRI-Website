import * as React from 'react';
import HomeNews from './components/HomeNews.js'
import Grid from '@mui/material/Grid';
import { News } from './components/News';
import AboutSection from './components/AboutSection';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import Typography from '@mui/material/Typography';

const imageLinkArr = [
    { linkName: 'Related Meetings', bgImgUrl: '/static/images/Blood_clot_in_scanning_electron_microscopy.jpg', },
    { linkName: 'Membership', bgImgUrl: '/static/images/BioProbes.jpg', },
    { linkName: 'History', bgImgUrl: '/static/images/TrevorSlater.jpg', },
    { linkName: 'Careers & Training', bgImgUrl: '/static/images/OxRadStress.jpg' },
]

const ImageLink = dynamic(
    () => import('./components/ImageLink'),
    { ssr: false }
)

export default function HomePage() {
    return (
        <>
            <main style={{ position: 'relative' }}>
                <HomeNews sx={{ borderRadius: '3px', }}>
                    <Grid item xs={12} sx={{ width: '100%', }}>
                        <Typography variant="h2" style={{ fontSize: '3rem', letterSpacing: '-3px', zIndex: 1, position: 'relative', }}>Latest News</Typography>
                    </Grid>
                    <News />
                </HomeNews>
                <Grid container spacing={1.25} sx={{ position: 'relative', marginBottom: '10px' }}>
                    {imageLinkArr.map(linkItem => {
                        return <Grid item xs={12} sm={6} md={6} lg={3} key={linkItem.linkName}>
                            <ImageLink linkName={linkItem.linkName} bgImgUrl={linkItem.bgImgUrl} />
                        </Grid>
                    })}
                </Grid>
                <AboutSection />
            </main>
            <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" strategy="lazyOnload" />
        </>
    );
}
