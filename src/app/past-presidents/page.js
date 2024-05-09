import * as React from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/society/past-presidents.json'
import { MarkdownComponent } from '@/utils';
import rehypeExternalLinks from 'rehype-external-links'
import Typography from '@mui/material/Typography';

export default async function PastPresidential() {
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <Typography variant="h2" style={{ marginBottom: '1em', }}>Past Presidents</Typography>
                {data.body && <MarkdownComponent>{data.body}</MarkdownComponent>}
            </Paper>
        </main>
    );
}