import * as React from 'react';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import data from '../../../_data/contact.json'
import { MarkdownComponent } from '@/utils';
import Typography from '@mui/material/Typography';

export default async function Contact() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <Typography variant="h2">Contact</Typography>
                {data.body && <span className='pNoMarginBottom'><MarkdownComponent>{data.body}</MarkdownComponent></span>}
                <p style={{ marginTop: '2em', marginBottom: 0, }}>Website designed and developed by <Link href='https://danielfraser.me' target="_blank" prefetch={false}>Daniel Fraser</Link></p>
            </Paper>
        </main>
    );
}