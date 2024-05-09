import * as React from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/society/women-in-science-forum.json'
import { MarkdownComponent } from '@/utils';
import Typography from '@mui/material/Typography';

export default function WomeninScienceForum() {
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <Typography variant="h2">Women in Science Forum</Typography>
                {data.body && <MarkdownComponent>{data.body}</MarkdownComponent>}
            </Paper>
        </main>
    );
}