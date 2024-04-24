'use client';
import * as React from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/society/presidential-address.json'
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';

export default function PresidentialAddress() {
    const [loading, setLoading] = useState(true);
    const maxImgWidth = /*imgWidth < 133.33 ? imgWidth :*/ 133.33
    const maxImgHeight = /*imgHeight < 133.33 ? imgHeight :*/ 133.33
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                {loading && <Skeleton
                    variant="rounded"
                    width={maxImgWidth}
                    height={maxImgHeight}
                />}
                <Image
                    priority
                    width={maxImgWidth}
                    height={maxImgHeight}
                    onLoad={() => setLoading(false)}
                    src={data.upload_path[0]}
                    alt={data.name}
                    style={{
                        width: '100%',
                        maxWidth: maxImgWidth,
                        height: 'auto',
                        display: loading ? 'none' : 'block',
                        float: 'right',
                        margin: '11px 18px',
                    }}
                />
                <Markdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }]]}>{data.body}</Markdown>
            </Paper>
        </main>
    );
}