import * as React from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/conferences/past-sfrri-conferences.json'
import { MarkdownComponent } from '@/utils';
import Typography from '@mui/material/Typography';

export default async function PastSFRRIConferences() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <Typography variant="h2">Past SFRRI Conferences</Typography>
                {data.body && <MarkdownComponent>{data.body}</MarkdownComponent>}
            </Paper>
        </main>
    );
}