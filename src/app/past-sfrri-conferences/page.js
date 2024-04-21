import * as React from 'react';
import Paper from '@mui/material/Paper';
import * as data from '../../../_data/conferences/past-sfrri-conferences.json'
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'

export default async function PastSFRRIConferences() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Past SFRRI Conferences</h2>
                <Markdown rehypePlugins={[[rehypeExternalLinks, {target: '_blank'}], [rehypeRaw]]}>{data.body}</Markdown>
                {/* <h2>Past SFRRI Conferences</h2>
                <p><a href="downloads/SFRRI_Delegates_attending_Biennial_Conferences.pdf">Delegates/Countries at SFRRI Biennial Meetings</a></p>
                <hr />
                <p className='bold'>1982	1st	Uxbridge, Great Britain</p>
                <hr />
                <p className='bold'>1984	2nd	York, Great Britain</p>
                <hr />
                <p className='bold'>1986	3rd 	Dusseldorf, Germany</p>
                <hr />
                <p className='bold'>1988	4th	Kyoto, Japan</p>
                <hr />
                <p className='bold'>1990	5th	Pasadena, USA</p>
                <hr />
                <p className='bold'>1992	6th	Turin, Italy</p>
                <hr />
                <p className='bold'>1994	7th	Sydney, Australia</p>
                <hr />
                <p className='bold'>1996	8th	Barcelona, Spain</p>
                <hr />
                <p className='bold'>1998	9th	San Paulo, Brazil</p>
                <hr />
                <p className='bold'>2000	10th	Kyoto, Japan</p>
                <hr />
                <p className='bold'>2002	11th	Paris, France</p>
                <hr />
                <p className='bold'>2004	12th	Buenos Aires, Argentina</p>
                <hr />
                <p className='bold'>2006	13th	Davos, Switzerland</p>
                <hr />
                <p className='bold'>2008	14th	Beijing, China</p>
                <hr />
                <p className='bold'>2010	15th	Orlando, Florida, USA</p>
                <hr />
                <p className='bold'><a href='http://www.sfrr.org/www.sfrrimeeting.org/' target='_blank'>2012	16th	London, Great Britain</a></p>
                <hr />
                <p className='bold'><a href='http://www.sfrr.org/www.sfrri2014.org/' target='_blank'>2014	17th	Kyoto, Japan</a></p>
                <p>
                    Photos from SFRRI 2014 Gala Dinner:&nbsp;
                    <a href='https://www.flickr.com/photos/sfrri2014/' target='_blank'>www.flickr.com/photos/sfrri2014/</a><br />
                    Photos from SFRRI Chairperson Dinner:&nbsp;
                    <a href='http://www.flickr.com/gp/sfrri2014/43TwPM' target='_blank'>www.flickr.com/gp/sfrri2014/43TwPM/</a><br />
                    Kyoto 2014 Opening Ceremony Video:&nbsp;
                    <a href='http://www.youtube.com/watch?v=A0nUgrmpWV0' target='_blank'>www.youtube.com/watch?v=A0nUgrmpWV0</a></p>
                <hr />
                <p className='bold'><a href='http://sfrr.org/sfrbm.org/meetings/annual-meeting/' target='_blank'>2016	18th San Francisco, USA</a></p>
                <p>
                    Photos from 18th SFRRI AGM, San Francisco:&nbsp;
                    <a href='https://flic.kr/s/aHskPVsqfh' target='_blank'>flic.kr/s/aHskPVsqfh</a><br />
                    Further photos here:&nbsp;
                    <a href='https://www.facebook.com/SFRBM' target='_blank'>facebook.com/SFRBM</a></p>
                <hr />
                <p className='bold'><a href='http://sfrr.org/sfrri2018lisbon.organideia.pt/'>2018 19th Lisboa, Portugal</a></p>
                <hr />
                <p className='bold'><a href='downloads/20th-SFRRI-AGM-210121-SFRRI-2021-Program.pdf'>2021 20th - Online Congress</a><br />
                    <a href="https://vimeo.com/user/5439545/folder/3938951" target='_blank'>Meeting Videos</a><br />
                    <a href="downloads/20th-SFRRI-Biennial-Meeting-2021-Book-of-Abstracts.pdf">20th SFRRI Book of Abstracts</a><br />
                    <a href="downloads/20th-SFRRI-AGM-photos.jpeg">Photos</a><br />
                    <a href="downloads/Photo-1-Closing-ceremony.pdf">Closing Ceremony Photos</a></p>
                <hr />
                <p className='bold'><a href='http://sfrr.org/sfrbm.org/SfRBM-SFRRI-2023-Conference/' target='_blank'>2023 - 21<sup>st</sup> Biennial SFRRI Meeting Joint with 30<sup>th</sup> Society for Redox Biology &amp; Medicine - Punta del Este, Uruguay</a><br />
                    <a href='https://www.flickr.com/photos/199630133@N04/albums/72177720313073054' target='_blank'>Photos</a>
                </p>
                <hr /> */}
            </Paper>
        </main>
    );
}