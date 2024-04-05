import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Image from 'next/image';

export default async function RedoxJournalsatElsevier() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Redox Journals at Elsevier</h2>
                <p>Submit your latest research to our community of redox journals supported by the Society for Free Radical Research International (SFRR-International), Society for Redox Biology & Medicine (SfRBM) and Society for Free Radical Research Europe (SFRR-Europe).</p>
                <Grid container spacing={6} sx={{ marginTop: 0, }}>
                    <Grid item xs={12} md={6}>
                        <Link href="https://www.journals.elsevier.com/free-radical-biology-and-medicine/" target="_blank" sx={{textAlign: 'center',}}>
                            <img src={'/static/images/journals/Free-Radical-Biology-&-Medicine1.jpg'} height="150" className='journal logo' alt='SFRRI Logo' style={{display: 'block', margin: '0 auto',}} />
                            <p>Free Radical Biology &amp; Medicine</p>
                        </Link>
                        <ul>
                            <li>
                                <i>FRBM</i> is the premier forum for publishing ground-breaking reaserch in the redox biology of both health and disease
                            </li>
                            <li>
                                2.3 weeks to a first decision
                            </li>
                            <li>
                                3.2 weeks for review
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Link href="https://www.journals.elsevier.com/redox-biology/" target="_blank" sx={{textAlign: 'center',}}>
                            <img src={'/static/images/journals/Redox-Biology1.jpg'} height="150" className='journal logo' alt='SFRRI Logo' style={{display: 'block', margin: '0 auto',}} />

                            <p>Redox Biology</p>
                        </Link>
                        <ul>
                            <li>
                                <i>Redox Biology</i> is an open access forum for novel research, methods and review articles in redox biology in the areas of both health and disease
                            </li>
                            <li>
                                1.8 weeks to a first decision
                            </li>
                            <li>
                                2.3 weeks for review
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Link href="https://www.journals.elsevier.com/advances-in-redox-research" target="_blank" sx={{textAlign: 'center',}}>
                            <img src={'/static/images/journals/Advances-in-Redox-Research.jpg'} height="150" className='journal logo' alt='SFRRI Logo' style={{display: 'block', margin: '0 auto',}} />
                            <p>Advances in Redox Research </p>
                        </Link>
                        <ul>
                            <li>
                                <i>ARR</i> publishes open access research focused on the broadest range of studies in oxidation-reduction (redox) processes in biology, biological chemistry, and health and disease - if biologically relevant.
                            </li>
                            <li>
                                Acceptance rate ~36%
                            </li>
                            <li>
                                Article Publication Charge free through June 2023!
                            </li>
                        </ul>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Link href="https://www.sciencedirect.com/journal/redox-biochemistry-and-chemistry" target="_blank" sx={{textAlign: 'center',}}>
                            <img src={'/static/images/journals/Redox-Biochemistry-and-Chemistry.jpg'} height="150" className='journal logo' alt='SFRRI Logo' style={{display: 'block', margin: '0 auto',}} />
                            <p>Redox Biochemistry and Chemistry</p>
                        </Link>
                        <ul>
                            <li>
                                <i>RBC</i> is an open access multidisciplinary platform bridging the fields of redox, biochemistry, chemistry, pollution/environmental health research, toxicology and antioxidant mechanisms.
                            </li>
                            <li>
                                2.2 weeks to a first decision
                            </li>
                            <li>
                                2.2 weeks for review
                            </li>
                            <li>
                                Article Publication Charge free through June 2023!
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <p>Official and affiliated journals of:</p>
                        <Link href="http://sfrbm.org/" target="_blank" sx={{ display: 'inline-block', padding: '0 12px', }}>
                            <img src={'/static/images/societyLogos/SFRBM-logo.png'} height="70" className='journal logo' alt='SFBM Logo' />
                        </Link>
                        <Link href="https://www.sfrr-europe.org/" target="_blank" sx={{ display: 'inline-block', padding: '0 12px', }}>
                            <img src={'/static/images/societyLogos/SFRR-Europe-logo.png'} height="70" className='journal logo' alt='SFRRE Logo' />
                        </Link>
                        <Link href="http://sfrr.org/" target="_blank" sx={{ display: 'inline-block', padding: '0 12px', }}>
                            <img src={'/static/images/SFRRI-Logox2.png'} height="70" className='journal logo' alt='SFRRI Logo' />
                        </Link>
                    </Grid>
                </Grid>
            </Paper>
        </main>
    );
}