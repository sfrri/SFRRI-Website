import * as React from 'react';
import Link from 'next/link';
import data from '../../../_data/contact.json'
import { MarkdownComponent } from '@/utils';
import Typography from '@mui/material/Typography';

const title = 'Contact'

export const metadata = {
    title: title,
}

export default async function Contact() {
    "use server";
    return (
        <React.Fragment>
            <Typography variant="h2">{title}</Typography>
            {data.body && <span className='pNoMarginBottom'><MarkdownComponent>{data.body}</MarkdownComponent></span>}
            <p style={{ marginTop: '2em', marginBottom: 0, }}>Website designed and developed by <Link href='https://danielfraser.me' target="_blank" prefetch={false}>Daniel Fraser</Link></p>
        </React.Fragment>
    );
}