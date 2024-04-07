import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageLinkGridItem from '../components/ImageLinkGridItem';

const data = [
    {
        name: 'Society for Redox Biology and Medicine', 
        url: 'http://sfrbm.org/about/leadership-and-staff/', 
        imgSrc: '/societyLogos/SFRBM-logo.png',
    },
    {
        name: 'Society for Free Radical Research Africa', 
        url: 'http://vcilt.uom.ac.mu/sfrr/index.php/about-us-menu', 
        imgSrc: '/societyLogos/SFRR-Africa-logo.png',
    },
    {
        name: 'Society for Free Radical Research Asia', 
        url: 'http://sfrrj.umin.jp/asia/en_Committee_members.htm', 
        imgSrc: '/societyLogos/SFRR-Asia-logo.png',
    },
    {
        name: 'Society for Redox Research Australasia', 
        url: 'http://www.sfrr-australasia.org', 
        imgSrc: '/societyLogos/SFRR-Australasia-logo.png',
    },
    {
        name: 'Society for Free Radical Research Europe', 
        url: 'https://www.sfrr-europe.org/index.php?cms_id=74', 
        imgSrc: '/societyLogos/SFRR-Europe-logo.png',
    },
    {
        name: 'Oxygen Club of California', 
        url: 'http://www.oxyclubcalifornia.org/OCC/OCC_officers.php', 
        imgSrc: '/societyLogos/OCC-logo.png',
},
]

export default function SFRRSocieties() {
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>SFRR Regional Societies</h2>
                <Grid container spacing={6} sx={{marginTop: 0,}}>
                    {data.map(item => (
                        item.name !== 'Oxygen Club of California' &&
                        <ImageLinkGridItem 
                            xs={12}
                            md={4}
                            href={item.url} 
                            width={174} 
                            height={156} 
                            src={item.imgSrc} 
                            name={item.name} 
                            key={item.name} 
                        />
                    ))}
            </Grid>
                <h4>SFRRI Affiliated Society</h4>
                <Grid container spacing={6}>
                    <ImageLinkGridItem 
                        xs={12}
                        md={4}
                        href={data[5].url} 
                        width={174} 
                        height={156} 
                        src={data[5].imgSrc} 
                        name={data[5].name} 
                    />
                </Grid>
            </Paper>
        </main>
    );
}
