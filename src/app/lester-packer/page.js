import * as React from 'react';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

export default async function LesterPacker() {
    "use server";
    return (
        <React.Fragment>
            <Typography variant="h2">Trevor Slater Awardee</Typography>
            <Grid container spacing={6} sx={{ marginTop: 0, }}>
                <Grid item xs={12} md={4}>
                    <div className="row">
                        <div className="avatar">
                            <Image src={'/static/images/fellows-and-awardees/Lester-Packer.jpg'} width={100} height={130} alt='Lester Packer' />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography variant="h4">Lester Packer</Typography>
                    <p>Lester Packer received a PhD in Microbiology and Biochemistry in 1956 from Yale University. In 1961, he joined the University of California at Berkeley serving as Professor of Cell and Molecular Biology and in 2000 became adjunct Professor Pharmacology and Pharmaceutical Sciences at the University of Southern California. Dr Packer has received numerous distinctions including three honorary doctoral degrees, several distinguished Professor appointments, and, recently, was awarded the Chevalier de l&apos;Ordre National du Merite (Knight of the French National Order of Merit). He was President of the Society for Free Radical Research International (SFRRI) and founder and honorary President of the Oxygen Club of California (OCC). Dr. Packer has edited more than 100 books and over 800 articles that generated more than 33,000 citations (average of 580 citations per year). Some of the most cited articles have become classics in the field of free radical biology: Antioxidant and Redox Regulation of Gene Transcription received 1,277 citations, Free radicals and tissue-damage produced by exercise 1,195 citations, and Lipoic acid as a biological antioxidant, 725 citations.</p>

                    <p>Lester Packer is a member of many professional societies and serves on five editorial boards. He has organized numerous conferences in the area of micronutrients, oxygen biology, and medicine and he is one of the world&apos;s leading researchers on antioxidants. His work elucidated new areas - the vitamin E cycle and the Antioxidant Network concept. Exogenous lipoic acid was discovered to be one of the most potent antioxidants known and placed as the ultimate reductant or antioxidant in the pecking order of the antioxidant network, thus regenerating vitamins C and E and stimulating glutathione synthesis, thereby improving the overall cellular antioxidant defense. Numerous studies of oxidative stress and free radical injury have confirmed these findings. The Antioxidant Network is not just a scientific concept addressing the cell&apos;s redox status but a world-wide network of research programs that Lester Packer helped develop by supporting and co-organizing conferences on free radical research in Asia, Europe, and America.</p>
                    <p><Link href='sfrri-awards-&-fellowships' prefetch={false}>Back to SFRRI Awards & Fellowships</Link></p>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}