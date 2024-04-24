import * as React from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/conferences/past-sfrri-conferences.json'
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'

export default async function PastSFRRIConferences() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Past SFRRI Conferences</h2>
                <Markdown rehypePlugins={[[rehypeExternalLinks, {target: '_blank'}], [rehypeRaw]]}>{data.body}</Markdown>
            </Paper>
        </main>
    );
}