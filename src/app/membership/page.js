import * as React from 'react';
import Paper from '@mui/material/Paper';
import * as data from '../../../_data/membership.json'
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'

export default async function Membership() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Membership</h2>
                <Markdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }], [rehypeRaw]]}>{data.body}</Markdown>
                {/* <h2>Membership</h2>
                <p>All members of the regional branches of the Society for Free Radical Research are automatically members of the Society for Free Radical Research International and are eligible for reduced registration rates at both the International Congresses of the Society and regional meetings.</p>
                <p>Members of the society also have access to a number of other benefits.</p>
                <h4>Membership Categories</h4>
                <h5>A. Ordinary Members </h5>
                <p>are persons who have an active interest in the field in Free Radical Research. Ordinary members are entitled to vote and hold Office. </p>
                <h5>B. Junior Members (students / clinical residents)</h5>
                <p>are persons in full or part-time training or further study, who have an active interest and/or competence in Free Radical Research. Evidence must be provided to the society of such training or study, if requested. They have the right to vote and hold office. Junior Members will automatically become Ordinary Members after a maximum of 5 years of Junior Membership.</p>
                <h5>C. Honorary Members</h5>
                <p>shall be senior physicians and scientists who have made an outstanding contribution to Free Radical Research over a number of years. Honorary membership is awarded by nomination of the person concerned by at least three members of the Society, and subsequent ratification by the general assembly of the Society.  Honorary members have the right to vote and hold office.</p>
                <h5>D. Emeritus (Retired) Members</h5>
                <p>At the time of retirement from full-time employment, a member may become an emeritus member. Emeritus members have the right to vote and hold office.</p>

                <h5>E. Corporate Members</h5>
                <p>shall be corporations or other organisations, including commercial enterprises, interested in the activities and objectives of the Society. They shall not have the right to vote or hold office.</p> */}
            </Paper>
        </main>
    );
}