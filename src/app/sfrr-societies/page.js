import * as React from 'react';
import Grid from '@mui/material/Grid';
import ImageLinkGridItem from '../components/ImageLinkGridItem';
import data from '../../../_data/sfrr-societies.json'
import Typography from '@mui/material/Typography';

const title = 'SFRR Regional Societies'

export const metadata = {
    title: title,
}

export default function SFRRSocieties() {
    return (
        <React.Fragment>
            <Typography variant='h2'>{title}</Typography>
            <Grid container spacing={6} sx={{ marginTop: 0, }}>
                {data.sfrr_society && data.sfrr_society.map(item => (
                    !item.affiliated_society &&
                    <ImageLinkGridItem
                        xs={12}
                        md={4}
                        href={item.link}
                        width={174}
                        height={156}
                        src={item.upload_path}
                        name={item.name}
                        key={item.name}
                    />
                ))}
            </Grid>
            {data.sfrr_society && data.sfrr_society.map(item => (
                item.name === 'Oxygen Club of California' && <React.Fragment key={item.name}>
                    <Typography variant="h4">SFRRI Affiliated Society</Typography>
                    <Grid container spacing={6}>
                        <ImageLinkGridItem
                            xs={12}
                            md={4}
                            href={item.link}
                            width={174}
                            height={156}
                            src={item.upload_path}
                            name={item.name}
                        />
                    </Grid>
                </React.Fragment>))}
        </React.Fragment>
    );
}
