import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageLinkGridItem from '../components/ImageLinkGridItem';
import data from '../../../_data/journals.json'
import JournalSocieties from '../components/JournalSocieties'
import Typography from '@mui/material/Typography';

const logoData = [
    {
        url: 'http://sfrbm.org/',
        width: 78,
        height: 70,
        imgSrc: '/static/images/societyLogos/SFRBM-logo.png',
        name: 'SfRBM',
    },
    {
        url: 'https://www.sfrr-europe.org/',
        width: 78,
        height: 70,
        imgSrc: '/static/images/societyLogos/SFRR-Europe-logo.png',
        name: 'SFRR Europe',
    },
    {
        url: 'http://sfrr.org/',
        width: 70,
        height: 70,
        imgSrc: '/static/images/SFRRI-Logox2.png',
        name: 'SFRRI',
    },
]

export default async function RedoxJournalsatElsevier() {
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <Typography variant="h2">Redox Journals at Elsevier</Typography>
                <p>Submit your latest research to our community of redox journals supported by the Society for Free Radical Research International (SFRR-International), Society for Redox Biology & Medicine (SfRBM) and Society for Free Radical Research Europe (SFRR-Europe).</p>
                <Grid container spacing={6} sx={{ marginTop: 0, }}>
                    {data.journal && data.journal.map(item => (
                        <>
                            <ImageLinkGridItem
                                xs={12}
                                md={6}
                                href={item.link}
                                width={item.width}
                                height={item.height}
                                src={item.upload_path}
                                name={item.name}
                                body={item.body}
                                key={item.name}
                            />
                        </>
                    ))}
                    <Grid item xs={12}>
                        <p>Official and affiliated journals of:</p>
                        {logoData.map(item => (
                            <JournalSocieties
                                url={item.url}
                                name={item.name}
                                imgSrc={item.imgSrc}
                                width={item.width}
                                height={item.height}
                                key={item.name}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Paper>
        </main>
    );
}
