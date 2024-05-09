import * as React from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/conferences/rules-for-conference-organisation.json'
import { MarkdownComponent } from '@/utils';
import Typography from '@mui/material/Typography';

export default async function RulesforConferenceOrganisation() {
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <Typography variant="h2">Rules for Conference Organisation</Typography>
                {data.body && <MarkdownComponent>{data.body}</MarkdownComponent>}
            </Paper>
        </main>
    );
}