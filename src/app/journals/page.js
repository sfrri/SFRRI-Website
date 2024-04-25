import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Image from 'next/image';
import ImageLinkGridItem from '../components/ImageLinkGridItem';
import data from '../../../_data/journals.json'

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
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Redox Journals at Elsevier</h2>
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
                    <Grid item xs={12} md={6}>
                        <p>Official and affiliated journals of:</p>
                        {logoData.map(item => (
                            <Link
                                href={item.url}
                                sx={{ display: 'inline-block', padding: '0 12px', }}
                                target="_blank"
                                key={item.name}
                            >
                                <Image
                                    src={item.imgSrc}
                                    width={item.width}
                                    height={item.height}
                                    alt={`${item.name} Logo`}
                                />
                            </Link>
                        ))}
                    </Grid>
                </Grid>
            </Paper>
        </main>
    );
}
