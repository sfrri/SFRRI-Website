import * as React from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/membership.json'
import { MarkdownComponent } from '@/utils';
import Typography from '@mui/material/Typography';

export default async function Membership() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <Typography variant="h2">Membership</Typography>
                {data.body && <MarkdownComponent>{data.body}</MarkdownComponent>}
            </Paper>
        </main>
    );
}