import * as React from 'react';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

const title = 'Etsuo Niki'

export const metadata = {
    title: title,
}

export default async function EtsuoNiki() {
    return (
        <React.Fragment>
            <Typography variant="h2">Trevor Slater Awardee</Typography>
            <Grid container spacing={6} sx={{ marginTop: 0, }}>
                <Grid item xs={12} md={4}>
                    <div className="row">
                        <div className="avatar">
                            <Image src={'/static/images/fellows-and-awardees/Etsuo-Niki.jpg'} width={100} height={130} alt='Etsuo Niki' />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography variant="h4">{title}</Typography>
                    <p>Dr. Etsuo Niki received B.Sc. and Ph.D. in chemistry from the University of Tokyo, Japan. He was Professor at the Research Center for Advanced Science and Technology, University of Tokyo until 2000 and Director, Human Stress Signal Research Center, National Institute of Advanced Industrial Science and Technology (AIST) until 2008. He is now Research Adviser at AIST, Visiting Professor of Kyoto Prefectural University of Medicine, and President of Molecular Dynamics for Antibody Drug Development Alliance Cooperation, Japan. He was the President of SFRR International from 1990 to 1992 and received the Travor Slater Award of SFRRI in 2010. His research interest includes mechanisms, dynamics, and measurement of Free Radicals, Lipid Peroxidation, Antioxidants, Oxidative Stress, and Biomarkers.</p>
                    <p><Link href='sfrri-awards-&-fellowships' prefetch={false}>Back to SFRRI Awards & Fellowships</Link></p>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}