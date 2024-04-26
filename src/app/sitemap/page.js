import * as React from 'react';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

export default async function Sitemap() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Sitemap</h2>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li>Society
                        <ul>
                            <li><Link href="presidential-address">Presidential Address</Link></li>
                            <li><Link href="sfrri-executive">SFRRI Executive</Link></li>
                            <li><Link href="past-presidents">Past Presidents</Link></li>
                            <li><Link href="history">History</Link></li>
                            <li><Link href="governance">Governance & Byelaws</Link></li>
                            <li><Link href="sfrri-awards-&-fellowships">SFRRI Awards & Fellowships</Link></li>
                            <li><Link href="women-in-science-forum">Women in Science Forum</Link></li>
                            <li><Link href="obituaries">Obituaries</Link></li>
                        </ul>
                    </li>
                    <li><Link href="sfrri-societies">SFRR Societies</Link></li>
                    <li><Link href="membership">Membership</Link></li>
                    <li>Conferences
                        <ul>
                            <li><Link href="future-sfrri-conferences">Future SFRRI Conferences</Link></li>
                            <li><Link href="past-sfrri-conferences">Past SFRRI Conferences</Link></li>
                            <li><Link href="past-sfrri-related-conferences">Past SFRRI Related Conferences</Link></li>
                            <li><Link href="rules-for-conference-organisation">Rules for Conference Organisation</Link></li>
                        </ul>
                    </li>
                    <li><Link href="related-meetings">Related Meetings</Link></li>
                    <li><Link href="sfrri-outreach">SFRRI Outreach</Link></li>
                    <li><Link href="journals">Journals</Link></li>
                    <li>Education
                        <ul>
                            <li><Link href="education">Education</Link></li>
                            <li><Link href="careers-&-training">Careers & Training</Link></li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li><Link href="sitemap">Sitemap</Link></li>
                    <li><Link href="disclaimer">Disclaimer</Link></li>
                    <li><Link href="contact">Contact</Link></li>
                </ul>
            </Paper>
        </main>
    );
}