import * as React from 'react';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

export default async function PresidentialAddress() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <div className="avatar" style={{ float: 'right' }}>
                    {/*<img src={imgPresident} alt='Giovanni Mann' />*/}
                </div>
                <h2>President’s Message 2024</h2>
                <p>On behalf of the SFRRI Executive, Roland Stocker, Patricia Oteiza, Lin Mantell and Jose Vina, I am writing to wish you the very best for 2024 and thank all regional SFRR Societies for their continued support of SFRRI.</p>
                <p>I am delighted with the success of the 21<sup>st</sup> Biennial SFRRI meeting hosted by SfRBM in Punta del Este, Uruguay from 15-18 November 2023. The joint conference was co-chaired by Prof. Raphael Radi and Prof. Francisco Laurindo and attended by delegates from South and North America, Europe, Asia and Australasia. The programme featured keynote lectures by the SFRRI Trevor Slater Awardee (Prof. Maret Traber), SFRRI Lester Packer Awardee (Prof. Jose Vina) and SFRRI Alberto Boveris Awardee (Prof. Helmut Sies), as well as SfRBM award lectures by Prof. Bruce Freeman and Prof. Stuart Lipton.  In addition to a pre-conference session ‘New Horizons in Redox Biology – Redox Metabolism’, sunrise schools and excellent interactive poster sessions, the conference featured 18 symposia. The programme and a photo gallery can be downloaded from <Link href='past-sfrri-conferences'>http://www.sfrr.org/past-conferences</Link></p>
                <p>The 22<sup>nd</sup> SFRRI Biennial Meeting will be hosted by SFRR-Europe in Galway, Ireland from 3-6 June 2025.  Ireland is a country renowned for its natural beauty and Galway is known as Ireland’s cultural heart. The meeting will be held in the University of Galway, which is conveniently located a 5-min walk of Galway city center and 10-min walk of campus accommodation. In addition to university accommodation, there are international hotels and many fine guesthouses and apartment rentals within easy walking distance of the conference venue. Galway is served by an extensive public transport network linking Dublin, Shannon and Knock airports.</p>
                <p>Please email me directly if you would like recent highlights or further information from your regional SFRR Society uploaded on the SFRRI web pages.</p>

                <p>We look forward to welcoming you at the 22<sup>nd</sup> SFRRI Biennial Meeting in Galway, Ireland in June 2025!</p>

                <p>With best wishes for 2024,</p>

                <p>Giovanni E. Mann<br />
                    President SFRR-International</p>
                <p>&nbsp;</p>
            </Paper>
        </main>
    );
}