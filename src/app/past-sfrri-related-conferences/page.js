import * as React from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/conferences/sfrri-related-conferences.json'
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'

export default async function SFRRIRelatedConferences() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Past SFRRI Related Conferences</h2>
                <Markdown rehypePlugins={[[rehypeExternalLinks, {target: '_blank'}], [rehypeRaw]]}>{data.body}</Markdown>
                {/* <p>
                    <span className="italic">June 17-19, 2022</span><br />
                    <span className="bold">Future of Redox Biology</span><br />
                    <span className="italic">Location:</span> Siena, Italy<br />
                    <span className="italic">Further information:</span> <a href="https://www.the-future-of-redox-biology-siena-2022.com" target="_blank">www.the-future-of-redox-biology-siena-2022.com</a><br />
                    <span className="italic">Further information:</span> <a href="downloads/the-future-of-redox-biology-locandina-OCC-SFRRE.pdf" target="_blank">Conference poster</a>
                </p>
                <p><a href="https://flic.kr/s/aHBqjzWign" target='_blank'>Photos</a></p>
                <hr /> */}
            </Paper>
        </main>
    );
}