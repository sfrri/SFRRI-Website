import * as React from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/education.json'
import { MarkdownComponent } from '@/utils';
import Typography from '@mui/material/Typography';

export default async function EducationalResources() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <Typography variant="h2">Educational Resources</Typography>
                {data.body && <MarkdownComponent>{data.body}</MarkdownComponent>}
            </Paper>
        </main>
    );
}