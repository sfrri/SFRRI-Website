import * as React from 'react';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import * as data from '../../../_data/contact.json'
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'

export default async function Contact() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Contact</h2>
                <Markdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }], [rehypeRaw]]} /*className='pNoMarginBottom'*/>{data.body}</Markdown>
                {/* <h4>Professor Giovanni E. Mann</h4>
                <p>Secretary-General SFRRI<br />
                    c/o Cardiovascular Division<br />
                    BHF Centre of Research Excellence<br />
                    Faculty of Life Sciences & Medicine<br />
                    King&apos;s College London<br />
                    Franklin-Wilkins Building (Rm 3.01)<br />
                    150 Stamford Street<br />
                    London SE1 9NH<br />
                    UK </p>
                <p>Tel: +44-20-7848-4306<br />
                    Fax: +44-20-7848-4500<br />
                    <Link href="mailto:giovanni.mann@kcl.ac.uk">giovanni.mann@kcl.ac.uk</Link></p> */}
                <p>Website designed and developed by <Link href='https://danielfraser.me' target="_blank">Daniel Fraser</Link></p>
            </Paper>
        </main>
    );
}