import * as React from 'react';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import Grid from '@mui/material/Grid';

export default async function SFRRIAwardsAndFellowships() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>SFRRI Awards &amp; Fellowships</h2>
                <p>Both the international society and the regional societies offer a wide range of fellowships and awards to foster and develop the field of free radicals and related oxidants. Many of these awards are linked to specific scientific meetings and its constitutent bodies. Further details of many of these awards are therefore listed on the <Link href='regional-societies-committees'>Regional Societies</Link> web pages.</p>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <h4>SFRRI Trevor Slater Award</h4>

                        <p>1994 - <a href="http://onlinelibrary.wiley.com/doi/10.1002/iub.161/epdf" target="_blank">Mario Dianzani</a></p>

                        <p>1996 - <a href="https://en.wikipedia.org/wiki/Irwin_Fridovich" target="_blank">Irwin Fridovich</a></p>

                        <p>1998 - <a href="http://www.dbb.su.se/about-us/events/lars-ernster-lectures" target="_blank">Lars Ernster</a></p>

                        <p>2000 - <a href="https://en.wikipedia.org/wiki/Britton_Chance" target="_blank">Britton Chance</a></p>

                        <p>2002 - <a href="https://history.nih.gov/exhibits/stadtman/index.htm" target="_blank">Earl Stadtman</a></p>

                        <p>2004 - <a href="https://www.scripps.edu/newsandviews/e_20040706/babior.html" target="_blank">Bernard Babior</a></p>

                        <p>2006 - <Link href='leopold-flohe'>Leopold Flohe</Link></p>

                        <p>2008 - <a href="http://www.otago.ac.nz/free-radical/staff/otago012105" target="_blank">Christine Winterbourn</a></p>

                        <p>2010 - <Link href='etsuo-niki'>Etsuo Niki</Link></p>

                        <p>2012 - <Link href='lester-packer'>Lester Packer</Link></p>

                        <p>2014 - <a href="http://europepmc.org/articles/PMC4245851" target="_blank">Helmut Sies</a></p>

                        <p>2016 - <a href="http://gero.usc.edu/faculty/davies" target="_blank">Kelvin J. Davies</a></p>

                        <p>2018 - <a href="https://gero.usc.edu/faculty/enrique-cadenas/" target="_blank">Enrique Cadenas</a></p>

                        <p>2021 - <a href="https://www.liverpool.ac.uk/life-course-and-medical-sciences/staff/malcolm-jackson/" target="_blank">Malcolm J Jackson</a></p>

                        <p>2023 - <a href="https://lpi.oregonstate.edu/faculty-staff/maret-traber" target="_blank">Maret Traber</a></p>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <h4>SFRRI Lester Packer Award</h4>

                        <p>2021 - <a href="http://www.nm-gcoe.med.tohoku.ac.jp/english/investigators/yamamoto/index.html" target="_blank">Masayuki Yamamoto</a></p>

                        <p>2023 - <a href="https://www.uv.es/freshage/" target="_blank">José Viña</a></p>

                        <h4>SFRRI Alberto Boveris Award</h4>

                        <p>2023 - <a href="https://en.wikipedia.org/wiki/Helmut_Sies" target="_blank">Helmut Sies</a><br />
                            <a href="https://europepmc.org/article/PMC/4245851" target="_blank">https://europepmc.org/article/PMC/4245851</a>
                        </p>

                        <h4>SFRRI Lifetime Achievement &amp; Service Awards</h4>

                        <p>2016 - <a href="https://www.liverpool.ac.uk/life-course-and-medical-sciences/staff/malcolm-jackson/" target="_blank">Malcolm J. Jackson</a></p>

                        <p>2018 - <a href="https://en.wikipedia.org/wiki/Arne_Holmgren" target="_blank">Arne Holmgren</a></p>

                        <p>2021 - <a href="https://gero.usc.edu/faculty/forman/" target="_blank">Henry J. Forman</a></p>

                        <p>2023 - <a href="http://gero.usc.edu/faculty/davies" target="_blank">Kelvin J. Davies</a></p>

                    </Grid>
                </Grid>
            </Paper>
        </main>
    );
}