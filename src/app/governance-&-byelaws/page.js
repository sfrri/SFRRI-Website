import * as React from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/society/governance-&-byelaws.json'
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'
import Typography from '@mui/material/Typography';

export default async function GovernanceAndByelaws() {
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <Typography variant="h2">SFRRI Governance & Byelaws</Typography>
                {data.body && <Markdown rehypePlugins={[[rehypeExternalLinks, {target: '_blank'}], [rehypeRaw]]}>{data.body}</Markdown>}
            </Paper>
        </main>
    );
}