import * as React from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/society/presidential-address.json'
import { MarkdownComponent } from '@/utils';
import ImageLoading from '../components/ImageLoading';

export default function PresidentialAddress() {
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                {data.upload_path && <ImageLoading imgSrc={data.upload_path} name={data.name && data.name} prAdd={true} />}
                {data.body && <MarkdownComponent>{data.body}</MarkdownComponent>}
            </Paper>
        </main>
    );
}