import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Image from 'next/image';

export default async function SFRRSocieties() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>SFRR Regional Societies</h2>
                <Grid container spacing={6} sx={{marginTop: 0,}}>
                    <Grid item xs={12} md={4}>
                        <Box component={Link} href="http://sfrbm.org/about/leadership-and-staff/" target="_blank" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',}}>
                            <Image width={174} height={156} src={'/static/images/societyLogos/SFRBM-logo.png'} />
                            <p>Society for Redox Biology and Medicine</p>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box component={Link} href="http://vcilt.uom.ac.mu/sfrr/index.php/about-us-menu" target="_blank" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',}}>
                            <Image width={174} height={156} src={'/static/images/societyLogos/SFRR-Africa-logo.png'} />
                            <p>Society for Free Radical Research Africa</p>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box component={Link} href="http://sfrrj.umin.jp/asia/en_Committee_members.htm" target="_blank" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',}}>
                            <Image width={174} height={156} src={'/static/images/societyLogos/SFRR-Asia-logo.png'} />
                            <p>Society for Free Radical Research Asia</p>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box component={Link} href="http://www.sfrr-australasia.org" target="_blank" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',}}>
                            <Image width={174} height={156} src={'/static/images/societyLogos/SFRR-Australasia-logo.png'} />
                            <p>Society for Redox Research Australasia</p>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box component={Link} href="https://www.sfrr-europe.org/index.php?cms_id=74" target="_blank" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',}}>
                            <Image width={174} height={156} src={'/static/images/societyLogos/SFRR-Europe-logo.png'} />
                            <p>Society for Free Radical Research Europe</p>
                        </Box>
                    </Grid>
                </Grid>
                <h4>SFRRI Affiliated Society</h4>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box component={Link} href="http://www.oxyclubcalifornia.org/OCC/OCC_officers.php" target="_blank" sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',}}>
                            <Image width={174} height={156} src={'/static/images/societyLogos/OCC-logo.png'} />
                            <p>Oxygen Club of California</p>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </main>
    );
}