import * as React from 'react';
import Paper from '@mui/material/Paper';
import * as data from '../../../_data/society/obituaries.json'
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'

export default async function Obituaries() {
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <Markdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }]]}>{data.body}</Markdown>
                {/* <h2>Obituaries</h2>
                <p>Obituary for Tom Dormandy (President SFRRI in 1982):</p>
                <p><a href="http://www.telegraph.co.uk/news/obituaries/9936083/Thomas-Dormandy.html" target="_blank">www.telegraph.co.uk/news/obituaries/9936083/Thomas-Dormandy.html</a></p> */}
            </Paper>
        </main>
    );
}