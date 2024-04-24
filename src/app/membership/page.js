import * as React from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/membership.json'
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'

export default async function Membership() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Membership</h2>
                <Markdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }], [rehypeRaw]]}>{data.body}</Markdown>
            </Paper>
        </main>
    );
}