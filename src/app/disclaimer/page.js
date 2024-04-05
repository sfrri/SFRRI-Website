import * as React from 'react';
import Paper from '@mui/material/Paper';

export default async function Disclaimer() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Disclaimer</h2>
                <p>The Society for Free Radical Research-International (SFRRI) will not be liable for any subsequent actions you take upon leaving this website, or liable for any information not on this website. SFRRI publishes links that resolve to external websites, which we cannot maintain and may be subject to changes without Society&apos;s knowledge.  As such, SFRRI is not responsible for the content on external websites.</p>

                <p>Please note, whilst SFRRI has made all reasonable efforts to ensure that the information available on this website is accurate in all material respects, the information available on this website may, however rarely, be incomplete or out of date or incorrect, and hence it is essential that you verify all such information with SFRRI before taking any action in reliance upon it.</p>

                <p>It is a condition of SFRRI in providing online access to the material on this website that you accept that SFRRI will not be liable for any action you take in reliance on the information on this website. SFRRI does not endorse any commercial products, services or advertising either on its website pages or when it has links to external web pages containing commercial products, services or advertising.</p>

                <p>Please note that the services described in this website are provided in the England and the statements governed by English Law. On no account shall any statement on this website constitute an offer to provide services.</p>
            </Paper>
        </main>
    );
}