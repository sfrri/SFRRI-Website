import * as React from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/society/presidential-address.json'
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import ImageLoading from '../components/ImageLoading';

export default function PresidentialAddress() {
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                {data.upload_path && <ImageLoading imgSrc={data.upload_path[0]} name={data.name && data.name} prAdd={true} />}
                {data.body && <Markdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }]]}>{data.body}</Markdown>}
            </Paper>
        </main>
    );
}