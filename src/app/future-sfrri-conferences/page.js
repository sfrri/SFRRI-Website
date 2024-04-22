'use client';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import * as data from '../../../_data/conferences/future-sfrri-conferences.json'
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import { NewsItem } from '../components/NewsComponents'

const Item = styled(Box)(() => ({
    position: 'relative',
    // padding: pathname === '/' ? '2px 10px' : '2px 0',
    pageBreakInside: 'avoid',                 /* Theoretically FF 20+ */
    breakInside: 'avoid-column',              /* Chrome, Safari, IE 11 */
    // display: 'table',                      /* Actually FF 20+ */

}));

export default function FutureSFRRIConferences() {
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Future SFRRI Conferences</h2>
                {data.future_sfrri_conferences.map(item => (
                <Item key={item["Meeting Title"]}>
                    <NewsItem
                        date={item.date}
                        title={item.meeting_title}
                        location={item.location}
                        link={item.further_information_link_hypertext ? item.further_information_link_hypertext : item.upload_path[0]}
                        linkText={item.further_information_link_text}
                    />
                </Item>
            ))}
                {/* <p>
        <span className="italic" style={{textDecoration: 'line-through',}}>March 17-20, 2020</span>&nbsp;&nbsp;<span className="bold">POSTPONED</span>&nbsp;&nbsp;<a href="downloads/SFRRI_Taiwan_2020_Announcement_to_postpone_meeting_31-01-20.docx">Further information</a><br />
          <span className="bold">20<sup>th</sup> Biennial Meeting of SFRR International</span><br />
          <span className="italic">Location:</span> Taipei, Taiwan<br />
          <span className="italic">Further information:</span> <a href="http://www.sfrri2020.org/" target="_blank">www.sfrri2020.org</a><br />
          <span className="italic">Venue:</span> Campus of CGUST-CGU which is located near both International Airport and Taipei.  This is a newly-built Conference Hall (capacity 900). The Mass Rapid Transit (MRT) station is about 10 min (walking) distance and 4 hotels nearby provide more than 500 rooms.  The National Palace Museum, Taipei World Trade Center, National Sun Yat-Sen Memorial Hall and many more Hotels can all be reached by MRT.
        </p> */}
                {/* <p>
                    <span className="italic">June 3-6, 2025</span><br />
                    <span className="bold">22nd Society for Free Radical Research International Biennial Meeting</span> (hosted by SFRR Europe)<br />
                    <span className="italic">Location:</span> Galway, Ireland<br />
                    <span className="italic">Further information:</span> <a href="downloads/22nd-SFRRI-Biennial-Meeting-Galway-3-6-June-2025.pdf" target="_blank">22nd SFRRI Biennial Conference, Galway, Ireland</a>
                </p> 
                <hr />*/}
            </Paper>
        </main>
    );
}