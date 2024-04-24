'use client';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageLinkGridItem from '../components/ImageLinkGridItem';
import data from '../../../_data/sfrr-societies.json'

export default function SFRRSocieties() {
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>SFRR Regional Societies</h2>
                <Grid container spacing={6} sx={{ marginTop: 0, }}>
                    {data.sfrr_society.map(item => (
                        !item.affiliated_society &&
                        <ImageLinkGridItem
                            xs={12}
                            md={4}
                            href={item.link}
                            width={174}
                            height={156}
                            src={item.upload_path[0]}
                            name={item.name}
                            key={item.name}
                        />
                    ))}
                </Grid>
                <h4>SFRRI Affiliated Society</h4>
                <Grid container spacing={6}>
                    {data.sfrr_society.map(item => (
                        item.name === 'Oxygen Club of California' &&
                        <ImageLinkGridItem
                            xs={12}
                            md={4}
                            href={item.link}
                            width={174}
                            height={156}
                            src={item.upload_path[0]}
                            name={item.name}
                            key={item.name}
                        />
                    ))}
                </Grid>
            </Paper>
        </main>
    );
}
