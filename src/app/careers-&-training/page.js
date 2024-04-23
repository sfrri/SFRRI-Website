import * as React from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/careers-&-training.json'
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'

export default async function Obituaries() {
    //"use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Careers and Training</h2>
                <Markdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }], [rehypeRaw]]}>{data.body}</Markdown>
                {/* <h4>SFRR-Europe</h4>
                <p>Travel Awards to attend SFRR-Europe Annual Meeting, Berlin, Germany 21-23 June 2017<br />
                    <a href="https://www.sfrr-europe.org/index.php/awards/travel-awards" target="_blank">sfrr-europe.org/index.php/awards/travel-awards</a></p>

                <p>Early Career Travel Awards 2017<br />
                    <a href="https://www.sfrr-europe.org/society/Guidelines_for_SFRR-E_Early_Career_Investigator_Travel_Awards_2017.pdf" target="_blank">sfrr-europe.org/society/Guidelines_for_SFRR-E_Early_Career_Investigator_Travel_Awards_2017.pdf</a></p>

                <p>Summer School Spetses, Greece September 2017 - TBA</p>

                <h4>SfRBM</h4>
                <p>Redox Biology Symposium at Experimental Biology 24 April 2018<br />
                    <a href="http://sfrbm.org/about/news/sfrbm-to-host-redox-biology-symposia-at-eb-2018-meeting" target="_blank">sfrbm.org/about/news/sfrbm-to-host-redox-biology-symposia-at-eb-2018-meeting</a></p> */}
            </Paper>
        </main>
    );
}