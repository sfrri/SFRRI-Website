import * as React from 'react';
import Paper from '@mui/material/Paper';

export default async function ForthcomingRelatedMeetings() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Forthcoming Related Meetings</h2>
                <p>
                    <span className="italic">May 29-31, 2024</span><br />
                    <span className="bold">16<sup>th</sup> International Conference on Reactive Oxygen and Nitrogen Species in Plants</span><br />
                    <span className="italic">Location:</span> Antibes Juan-les-Pins, France<br />
                    <span className="italic">Further information:</span> <a href="https://www.alphavisa.com/pog/2024/index.php" target="_blank">https://www.alphavisa.com/pog/2024/</a>
                </p>
                <hr />
                <p>
                    <span className="italic">October 10-12, 2024</span><br />
                    <span className="bold">Lipid Oxidation: New Biochemical Insights and Clinical Applications</span><br />
                    <span className="italic">Location:</span> Genoa, Italy<br />
                    <span className="italic">Further information:</span> <a href="downloads/HNE-Club-Meeting.pdf" target="_blank">download flyer</a>
                </p>
                <hr />
                <p>
                    <span className="italic">October 21-23, 2024</span><br />
                    <span className="bold">11<sup>th</sup> Biennial Meeting of SFRR Asia and Chinese National Conference of Redox Biology & Medicine 2024</span><br />
                    <span className="italic">Location:</span> <a href="http://www.kuntaihotel.com/" target="_blank">Kuntai Hotel</a> (Beijing Wangjing), Beijing, China <br />
                    <span className="italic">Further information:</span> <a href="http://www.sfrr-asia2024.com.cn/" target="_blank">http://www.sfrr-asia2024.com.cn/</a>
                </p>
                <hr />
                <p>
                    <span className="italic">November 20-23, 2024</span><br />
                    <span className="bold">31<sup>st</sup> Annual Conference of the Society for Redox Biology &amp; Medicine</span><br />
                    <span className="italic">Location:</span> Savannah Convention Center, Savannah, Georgia, USA<br />
                    <span className="italic">Further information:</span> <a href="https://sfrbm.org/" target="_blank">sfrbm.org</a>
                </p>
                <hr />
            </Paper>
        </main>
    );
}