import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageLinkGridItem from '../components/ImageLinkGridItem';
import data from '../../../_data/sfrr-societies.json'
import Typography from '@mui/material/Typography';

export default function SFRRSocieties() {
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <Typography variant='h2'>SFRR Regional Societies</Typography>
                <Grid container spacing={6} sx={{ marginTop: 0, }}>
                    {data.sfrr_society && data.sfrr_society.map(item => (
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
                <Typography variant="h4">SFRRI Affiliated Society</Typography>
                <Grid container spacing={6}>
                    {data.sfrr_society && data.sfrr_society.map(item => (
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
