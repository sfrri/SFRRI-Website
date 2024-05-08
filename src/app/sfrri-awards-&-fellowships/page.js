import * as React from 'react';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import data from '../../../_data/society/sfrri-awards-&-fellowships.json'
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'
import Typography from '@mui/material/Typography';

export default async function SFRRIAwardsAndFellowships() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <Typography variant="h2">SFRRI Awards &amp; Fellowships</Typography>
                <p>Both the international society and the regional societies offer a wide range of fellowships and awards to foster and develop the field of free radicals and related oxidants. Many of these awards are linked to specific scientific meetings and its constitutent bodies. Further details of many of these awards are therefore listed on the <Link href='sfrr-societies'>Regional Societies</Link> web pages.</p>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        {data.body_col1 && <Markdown rehypePlugins={[[rehypeExternalLinks, {target: '_blank'}], [rehypeRaw]]}>{data.body_col1}</Markdown>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {data.body_col2 && <Markdown rehypePlugins={[[rehypeExternalLinks, {target: '_blank'}], [rehypeRaw]]}>{data.body_col2}</Markdown>}
                    </Grid>
                </Grid>
            </Paper>
        </main>
    );
}