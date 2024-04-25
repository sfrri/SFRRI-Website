'use client';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import dynamic from 'next/dynamic';

const ClientSideOnlyMap = dynamic(
    () => import('./Map'),
    { ssr: false }
)

const AboutSection = () => {
    return (
        <Paper variant="padded" sx={{ borderRadius: '3px', }}>
                    <Grid container spacing={1} sx={{ position: 'relative', marginBottom: '10px' }}>
                        <Grid item xs={12} lg={6}>
                            <h3>About</h3>
                            <p>The Society for Free Radical Research founded in the United Kingdom in 1982 is an International Society with the following rules (as amended by resolution of the members dated September 11, 1998). The International Society is a charitable voluntary, non-profit making institution.</p>
                            <p>The object of the International Society is to advance education in free radical processes with particular reference to those of industrial and medical importance, such education being for the benefit of the public.</p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <ClientSideOnlyMap />
                        </Grid>
                        <Grid item xs={12}>
                            <h3>Objectives</h3>
                            <ul>
                                <li>to provide continuing education and training to scientists with an active interest in Free Radical Research</li>
                                <li>to provide a forum for discussions</li>
                                <li>to receive and apply donations, subscriptions and funds from persons or organizations</li>
                                <li>to invest and deal with the International Society&apos;s money not immediately required for its objects in or upon any investments, securities or property;</li>
                                <li>to do all other lawful things necessary to advance the object</li>
                                <li>to promote research and publication of its beneficial findings</li>
                            </ul>
                        </Grid>
                    </Grid>
                </Paper>
    )
}

export default AboutSection
