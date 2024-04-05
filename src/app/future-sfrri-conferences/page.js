import * as React from 'react';
import Paper from '@mui/material/Paper';

export default async function FutureSFRRIConferences() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Future SFRRI Conferences</h2>
                {/* <p>
        <span className="italic" style={{textDecoration: 'line-through',}}>March 17-20, 2020</span>&nbsp;&nbsp;<span className="bold">POSTPONED</span>&nbsp;&nbsp;<a href="downloads/SFRRI_Taiwan_2020_Announcement_to_postpone_meeting_31-01-20.docx">Further information</a><br />
          <span className="bold">20<sup>th</sup> Biennial Meeting of SFRR International</span><br />
          <span className="italic">Location:</span> Taipei, Taiwan<br />
          <span className="italic">Further information:</span> <a href="http://www.sfrri2020.org/" target="_blank">www.sfrri2020.org</a><br />
          <span className="italic">Venue:</span> Campus of CGUST-CGU which is located near both International Airport and Taipei.  This is a newly-built Conference Hall (capacity 900). The Mass Rapid Transit (MRT) station is about 10 min (walking) distance and 4 hotels nearby provide more than 500 rooms.  The National Palace Museum, Taipei World Trade Center, National Sun Yat-Sen Memorial Hall and many more Hotels can all be reached by MRT.
        </p> */}
                <p>
                    <span className="italic">June 3-6, 2025</span><br />
                    <span className="bold">22nd Society for Free Radical Research International Biennial Meeting</span> (hosted by SFRR Europe)<br />
                    <span className="italic">Location:</span> Galway, Ireland<br />
                    <span className="italic">Further information:</span> <a href="downloads/22nd-SFRRI-Biennial-Meeting-Galway-3-6-June-2025.pdf" target="_blank">22nd SFRRI Biennial Conference, Galway, Ireland</a>
                </p>
                <hr />
            </Paper>
        </main>
    );
}