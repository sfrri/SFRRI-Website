import * as React from 'react';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import data from '../../../_data/contact.json'
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'
import Typography from '@mui/material/Typography';

export default async function Contact() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <Typography variant="h2">Contact</Typography>
                {data.body && <Markdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }], [rehypeRaw]]} /*className='pNoMarginBottom'*/>{data.body}</Markdown>}
                <p>Website designed and developed by <Link href='https://danielfraser.me' target="_blank">Daniel Fraser</Link></p>
            </Paper>
        </main>
    );
}