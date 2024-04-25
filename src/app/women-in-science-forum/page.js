import * as React from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/society/women-in-science-forum.json'
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'

export default function WomeninScienceForum() {
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Women in Science Forum</h2>
                {data.body && <Markdown rehypePlugins={[[rehypeExternalLinks, {target: '_blank'}], [rehypeRaw]]}>{data.body}</Markdown>}
            </Paper>
        </main>
    );
}