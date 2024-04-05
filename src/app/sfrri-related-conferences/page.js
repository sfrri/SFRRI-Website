import * as React from 'react';
import Paper from '@mui/material/Paper';

export default async function SFRRIRelatedConferences() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>SFRRI Related Conferences</h2>
                <p>
                    <span className="italic">June 17-19, 2022</span><br />
                    <span className="bold">Future of Redox Biology</span><br />
                    <span className="italic">Location:</span> Siena, Italy<br />
                    <span className="italic">Further information:</span> <a href="https://www.the-future-of-redox-biology-siena-2022.com" target="_blank">www.the-future-of-redox-biology-siena-2022.com</a><br />
                    <span className="italic">Further information:</span> <a href="downloads/the-future-of-redox-biology-locandina-OCC-SFRRE.pdf" target="_blank">Conference poster</a>
                </p>
                <p><a href="https://flic.kr/s/aHBqjzWign" target='_blank'>Photos</a></p>
                <hr />
            </Paper>
        </main>
    );
}