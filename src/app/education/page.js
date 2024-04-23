import * as React from 'react';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import data from '../../../_data/education.json'
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'

export default async function EducationalResources() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Educational Resources</h2>
                <Markdown rehypePlugins={[[rehypeExternalLinks, {target: '_blank'}], [rehypeRaw]]}>{data.body}</Markdown>
                {/* <p>
                    <span className="bold">Nature Reviews Molecular Cell Biology - Expert Recommendation</span><br />
                    <span>Defining roles of specific reactive oxygen species (ROS) in cell biology and physiology<br />
                        Sies, H., et al (2022) Nat. Rev. Mol. Cell. Biol. 23, (see ReadCube Link sent by the publisher - <Link href="https://rdcu.be/cHwbe" target="_blank">https://rdcu.be/cHwbe</Link>)</span>
                </p>
                <hr />
                <p>
                    <span className="bold"><Link href="https://www.youtube.com/watch?v=L6OzANBJJU4" target="_blank">
                        How to write a Great Research Paper and Get it Accepted by a Good Journal</Link></span><br />
                    <span>Anthony Newman (Elsevier) webinar</span>
                </p>
                <p className="video-container">
                    <iframe src="https://www.youtube.com/embed/L6OzANBJJU4?t=3m4s" frameBorder="0" allowFullScreen />
                </p> */}
            </Paper>
        </main>
    );
}