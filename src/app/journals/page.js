import * as React from 'react';
import Grid from '@mui/material/Grid';
import ImageLinkGridItem from '../components/ImageLinkGridItem';
import data from '../../../_data/journals.json'
import JournalSocieties from '../components/JournalSocieties'
import Typography from '@mui/material/Typography';

const title = 'Redox Journals at Elsevier'

export const metadata = {
    title: title,
}

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
        <React.Fragment>
            <Typography variant="h2">{title}</Typography>
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
        </React.Fragment>
    );
}
