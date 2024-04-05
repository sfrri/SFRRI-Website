import * as React from 'react';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

export default async function EtsuoNiki() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Trevor Slater Awardee</h2>
                <Grid container spacing={6} sx={{ marginTop: 0, }}>
                    <Grid item xs={12} md={4}>
                        <div className="row">
                            <div className="avatar">
                                <img src={'/static/images/fellows-and-awardees/Etsuo-Niki.jpg'} alt='Etsuo Niki' />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <h2>Etsuo Niki</h2>
                        <p>Dr. Etsuo Niki received B.Sc. and Ph.D. in chemistry from the University of Tokyo, Japan. He was Professor at the Research Center for Advanced Science and Technology, University of Tokyo until 2000 and Director, Human Stress Signal Research Center, National Institute of Advanced Industrial Science and Technology (AIST) until 2008. He is now Research Adviser at AIST, Visiting Professor of Kyoto Prefectural University of Medicine, and President of Molecular Dynamics for Antibody Drug Development Alliance Cooperation, Japan. He was the President of SFRR International from 1990 to 1992 and received the Travor Slater Award of SFRRI in 2010. His research interest includes mechanisms, dynamics, and measurement of Free Radicals, Lipid Peroxidation, Antioxidants, Oxidative Stress, and Biomarkers.</p>
                        <p><Link href='sfrri-awards-&-fellowships'>Back to SFRRI Awards & Fellowships</Link></p>
                    </Grid>
                </Grid>
            </Paper>
        </main>
    );
}