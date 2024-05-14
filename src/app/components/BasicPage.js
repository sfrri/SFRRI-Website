import * as React from 'react';
import Paper from '@mui/material/Paper';
import { MarkdownComponent } from '@/utils';
import Typography from '@mui/material/Typography';

export default function BasicPage({ title, dataArray }) {
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <Typography variant="h2" style={{ marginBottom: '1em', }}>{title}</Typography>
                {dataArray && <MarkdownComponent>{dataArray}</MarkdownComponent>}
            </Paper>
        </main>
    );
}