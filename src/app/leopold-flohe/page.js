import * as React from 'react';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

export default async function LeopoldFlohe() {
    "use server";
    return (
        <React.Fragment>
            <Typography variant="h2">Trevor Slater Awardee</Typography>
            <Grid container spacing={6} sx={{ marginTop: 0, }}>
                <Grid item xs={12} md={4}>
                    <div className="row">
                        <div className="avatar">
                            <Image src={'/static/images/fellows-and-awardees/Leopold-Flohe.jpg'} width={100} height={130} alt='Leopold Flohe' />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography variant="h4">Leopold Flohe</Typography>
                    <p><span className='bold'>Education</span><br />
                        1957-1959: Universities of Cologne and Heidelberg (Philosophy)<br />
                        1959-1968: University of Tübingen (Medicine), Staatsexamen 1968<br />
                        Medical Doctor 1968<br />
                        1962-1967: University of Tübingen (Biochemistry), Diplom 1967<br />
                        1971:University of Tübingen, Venia legendi in Biochemistry<br />
                        1974: Bartholomews&apos; Hospital, London: Training in Clinical Pharmacology</p>

                    <p><span className='bold'>Appointments</span><br />
                        1968-1971:University of Tübingen, Dept. Physiological Chemistry, Scientist (Assistant)<br />
                        1971-1973: ibidem, Senior Scientist (Oberassistent)<br />
                        1974-1979: University of Tübingen, Professor of Biochemistry (apl. Prof.)<br />
                        1974-1976: Grünenthal GmbH, Stolberg / Aachen, Head of Section Pharmacotherapeutics<br />
                        1976-1990: ibidem, Director Research and Development<br />
                        1979-1990: University of Aachen (RWTH), Professor of Biochemistry (apl.Prof.)<br />
                        1990-1995: Technical University of Braunschweig: Professor of Biotechnology and Biochemistry<br />
                        1990-1995: Gesellschaft für Biotechnologische Forschung (GBF/HZI), Scientific Director<br />
                        1996: University of California at Berkeley, Visiting Professor<br />
                        1996-2003: Technical University of Braunschweig: Professor of Biochemistry<br />
                        2002-2010: MOLISA GmbH, CEO<br />
                        2008-present: Otto-von-Guericke-Universität, Magdeburg (Guest Professor) and Chairman of COST Action CM0801.</p>

                    <p><span className='bold'>Professional Organisations:</span> GBM, FEBS, SFRR, AAAS, ASBMB.</p>
                    <p><span className='bold'>Honours and Awards</span><br />
                        1962-1968: Fellow of Studienstiftung des Deutschen Volkes<br />
                        1973: Award of the Anna-Monika-Foundation (for basic research in endogenous depression)<br />
                        1985: Claudius-Galenus-Preis (for production of urokinase by recombinant technology)<br />
                        1997: Honorary Degree (Dr. h. c.), University of Buenos Aires, Argentina (for achievements in parasitology)<br />
                        1997: Klaus Schwarz Commemorative Medal (for pioneering in selenium research)<br />
                        1998:&quot;Paper of the year&quot; award (to P.H. student E. Nogoceke for discovery of the trypanosomatid peroxidase system); Science and Humanity Prize, Oxygen Club of California (for life time achievements)<br />
                        2006:Trevor Frank Slater Award and Gold Medal, SFRR International (for life time achievements)<br />
                        Redox Pioneer #3, Antioxid Redox Signal 2010.</p>

                    <p><span className='bold'>Extramural Activities:</span> Editorial Board, Biological Chemistry; Co-Founder, Axxima Pharmaceutical AG, Martinsried; Founder, MOLISA GmbH, Magdeburg.</p>
                    <p><span className='bold'>Major Scientific Achievements</span><br />
                        First verification of a selenoprotein (glutathione peroxidase) in animals (1973)<br />
                        First detection of superoxide radical production by the respiratory chain of mitochondria (1974)<br />
                        Development of Tramadol, now best selling analgesic (1978)<br />
                        Sequencing, cloning, development, and production of urokinase/pro-urokinase (1982-89)<br />
                        Elucidation of the structure, gene, catalytic mechanism and role in spermatogenesis of the selenoprotein phospholipid hydroperoxide glutathione peroxidase (1992-2003)<br />
                        Elucidation of trypanothione-mediated hydroperoxide reduction in parasitic trypanosomatids (1997-2006)<br />
                        Hydroperoxide metabolism in mycobacteria (2003).</p>

                    <p><span className='bold'>Five Selected Publications</span> (out of &gt;200)<br />
                        Brigelius-Flohé, R., and Flohé, L., Basic Principles and Emerging Concepts in the Redox Control of Transcription Factors (Comprehensive invited review). Antioxid Redox Signal 2011 (doi:10.1089/ars.2010.3534)<br />
                        Flohé, L., Changing Paradigms in Thiology: From Antioxidant Defense Toward Redox Regulation (Invited review). Meth. Enzymol. 2010, 473, 1-39<br />
                        Flohé, L., In Search of Trypanocidal Drugs. In: Antiparasitic and Antibacterial Drug Discovery (P. M. Selzer, ed.). Wiley-VCH Verlag GmbH & Co. KGaA, Weinheim 2009, pp. 211-226<br />
                        Flohé, L. and Harris, J. R. (eds), Peroxiredoxin Systems. Subcellular Biochemistry, Vol.44. Springer, New
                        York 2007, pp.1-389, in particular pp. 1-25, 83-114 and 207-218<br />
                        Comini, M., Menge, U., Wissing, J. and Flohé, L., Trypanothione Synthesis in Crithidia Revisited. J Biol Chem 2005. 280: 6850-6860<br />
                        Ursini, F.; Heim, S.; Kiess, M.; Maiorino, M.; Roveri, A.; Wissing, J.; Flohé, L., Dual function of the selenoprotein PHGPx during sperm maturation. Science 1999, 285, (5432), 1393-1396.</p>
                    <p><Link href='sfrri-awards-&-fellowships' prefetch={false}>Back to SFRRI Awards & Fellowships</Link></p>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}