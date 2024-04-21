import * as React from 'react';
import Paper from '@mui/material/Paper';
import * as data from '../../../_data/sfrri-outreach.json'
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'

export default async function SFRRISponsoredConferences() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>SFRRI Sponsored Conferences</h2>
                <Markdown rehypePlugins={[[rehypeExternalLinks, {target: '_blank'}], [rehypeRaw]]}>{data.body}</Markdown>
                {/* <h4>2016</h4>
                <p><a href="downloads/SfRBM-SFRRI_Report_16-19_Nov_2016_for_SFRRI_webpages.pdf">Report for SFRRI sponsorship of SfRBM-SFRRI Joint Meeting, San Francisco 16-19 November 2016</a></p>
                <p><a href="http://sfrr.org/sfrbm.org/meetings/annual-meeting/">Joint 23rd SfRBM and 18th SFRRI Meeting, San Francisco, California, USA, 16-19 November 2016</a></p>

                <p><a href="downloads/SFRR_India_2016_Meeting_Report_Information.pdf">SFRR India Annual Meeting: ‘International Conference on Free Radicals, Antioxidants and Functional Food’, Kalyani, West Bengal, 7-9 January 2016</a></p>

                <hr />
                <h4>2015</h4>
                <p><a href="downloads/Report_Christine_Winterbourn_Festschrift_7th_Joint_Meeting_SFRR-Australasia_and_SFRR-Japan.pdf">Festschrift for Prof Christine Winterbourn, University of Otago, Christchurch, New Zealand, 8-10 December 2015</a></p>

                <p><a href="downloads/Sue_Goo_Rhee_International_Peroxiredoxin_Symposium_Seoul_Korea_26-27_Oct_2015.pdf">Peroxiredoxin Symposium, Yonsei University College of Medicine Severance Biomedical Science Institute, Seoul, South Korea, 26-27 October 2015</a></p>
                <hr /> */}
            </Paper>
        </main>
    );
}