'use client';
import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link'
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';
import BioAccordion from './BioAccordion';
import { kebabize } from '@/utils';

const SFRRIExecutiveItem = ({ imgWidth, imgHeight, name, title, address, tel, email, link, bio, }) => {
    const [loading, setLoading] = useState(true);
    console.log(`/static/images/SFRRIExecutive/${kebabize(name)}.jpg`)
    const maxImgWidth = imgWidth < 133.33 ? imgWidth : 133.33
    const maxImgHeight = imgHeight < 133.33 ? imgHeight : 133.33
    return (
        <Grid container spacing={0} sx={{marginTop: '2em',}}>
            <Grid item xs={12} lg={2} sx={{marginTop: '2em',}}>
                {loading && <Skeleton
                    variant="rounded"
                    width={maxImgWidth}
                    height={maxImgHeight}
                />}
                <Image
                    width={imgWidth}
                    height={imgHeight}
                    onLoad={(e) => setLoading(false)}
                    src={`/static/images/SFRRIExecutive/${kebabize(name)}.jpg`}
                    alt={name}
                    style={{
                        width: '100%',
                        maxWidth: imgWidth,
                        height: 'auto',
                        display: loading ? 'none' : 'block',
                      }}
                    priority
                />
            </Grid>
            <Grid item xs={12} lg={10} sx={{padding: '0 1em',}}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sx={{padding: '0 1em',}}><h4>{title}</h4></Grid>
                    <Grid item xs={12} sx={{padding: '0 1em',}}><p className='bold'>{name}</p></Grid>
                    <BioAccordion bio={bio} />
                    <Grid item xs={12} lg={6} sx={{padding: '0 1em',}}>
                        <p dangerouslySetInnerHTML={{ __html: address }} />
                    </Grid>
                    <Grid item xs={12} lg={6} sx={{padding: '0 1em',}}>
                        <p>
                            Tel:&nbsp;{tel}<br />
                            Email:&nbsp;<Link href={email} target="_blank">{email}</Link><br />
                            URL:&nbsp;<Link href={link} target="_blank">{link}</Link>
                        </p>
                    </Grid>
                </Grid>
            </Grid>
            <hr />
        </Grid>
    )
}

export default SFRRIExecutiveItem
