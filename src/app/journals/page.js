import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Image from 'next/image';
import ImageLinkGridItem from '../components/ImageLinkGridItem';

const data = [
    {
        name: 'Free Radical Biology &amp; Medicine', 
        url: 'https://www.journals.elsevier.com/free-radical-biology-and-medicine/', 
        width: 147,
        height: 150,
        imgSrc: '/journals/Free-Radical-Biology-&-Medicine1.jpg', 
        listItems: [
            '<i>FRBM</i> is the premier forum for publishing ground-breaking reaserch in the redox biology of both health and disease', 
            '2.3 weeks to a first decision', 
            '3.2 weeks for review',
        ],
    },
    {
        name: 'Redox Biology', 
        url: 'https://www.journals.elsevier.com/free-radical-biology-and-medicine/', 
        width: 144,
        height: 150,
        imgSrc: '/journals/Redox-Biology1.jpg', 
        listItems: [
            '<i>Redox Biology</i> is an open access forum for novel research, methods and review articles in redox biology in the areas of both health and disease', 
            '2.3 weeks to a first decision', 
            '2.3 weeks for review',
        ],
    },
    {
        name: 'Advances in Redox Research', 
        url: 'https://www.journals.elsevier.com/advances-in-redox-research',
        width: 112,
        height: 150,
        imgSrc: '/journals/Advances-in-Redox-Research.jpg', 
        listItems: [
            '<i>ARR</i> publishes open access research focused on the broadest range of studies in oxidation-reduction (redox) processes in biology, biological chemistry, and health and disease - if biologically relevant.', 
            'Acceptance rate ~36%', 
            'Article Publication Charge free through June 2023!',
        ],
    },
    {
        name: 'Redox Biochemistry and Chemistry', 
        url: 'https://www.sciencedirect.com/journal/redox-biochemistry-and-chemistry', 
        width: 113,
        height: 150,
        imgSrc: '/journals/Redox-Biochemistry-and-Chemistry.jpg', 
        listItems: [
            '<i>RBC</i> is an open access multidisciplinary platform bridging the fields of redox, biochemistry, chemistry, pollution/environmental health research, toxicology and antioxidant mechanisms.', 
            '2.2 weeks to a first decision', 
            '2.2 weeks for review',
            'Article Publication Charge free through June 2023!',
        ],
    },
]

const logoData = [
    {
        url: 'http://sfrbm.org/', 
        width: 78,
        height: 70,
        imgSrc: '/static/images/societyLogos/SFRBM-logo.png',
        name: 'SfRBM',
    },
    {
        url: 'https://www.sfrr-europe.org/', 
        width: 78,
        height: 70,
        imgSrc: '/static/images/societyLogos/SFRR-Europe-logo.png',
        name: 'SFRR Europe',
    },
    {
        url: 'http://sfrr.org/', 
        width: 70,
        height: 70,
        imgSrc: '/static/images/SFRRI-Logox2.png',
        name: 'SFRRI',
    },
]

export default async function RedoxJournalsatElsevier() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Redox Journals at Elsevier</h2>
                <p>Submit your latest research to our community of redox journals supported by the Society for Free Radical Research International (SFRR-International), Society for Redox Biology & Medicine (SfRBM) and Society for Free Radical Research Europe (SFRR-Europe).</p>
                <Grid container spacing={6} sx={{ marginTop: 0, }}>
                    {data.map(item => (
                        <ImageLinkGridItem 
                            xs={12}
                            md={6}
                            href={item.url} 
                            width={item.width}
                            height={item.height} 
                            src={item.imgSrc} 
                            name={item.name} 
                            listItems={item.listItems}
                            key={item.name} 
                        />
                    ))}
                    <Grid item xs={12} md={6}>
                        <p>Official and affiliated journals of:</p>
                        {logoData.map(item => (
                            <Link 
                                href={item.url} 
                                sx={{ display: 'inline-block', padding: '0 12px', }}
                                target="_blank" 
                            >
                                <Image 
                                    src={item.imgSrc} 
                                    width={item.width} 
                                    height={item.height} 
                                    alt={`${item.name} Logo`}
                                />
                            </Link>
                        ))}
                    </Grid>
                </Grid>
            </Paper>
        </main>
    );
}
