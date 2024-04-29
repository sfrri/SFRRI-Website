'use client';
import * as React from 'react';
import { useState, useCallback } from 'react';
// import Link from 'next/link'
import Grid from '@mui/material/Grid';
import Image from 'next/image';
// import Skeleton from '@mui/material/Skeleton';
import BioAccordion from './BioAccordion';
import { kebabize } from '@/utils';
// import DOMPurify from 'isomorphic-dompurify';
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import CircularProgress from '@mui/material/CircularProgress';

const SFRRIExecutiveItem = ({ /*imgWidth, imgHeight, */title, name, bio, address, contact_details, /*tel, email, link,*/ }) => {
    const [loading, setLoading] = useState(true);

    const maxImgWidth = /*imgWidth < 133.33 ? imgWidth :*/ 133.33
    const maxImgHeight = /*imgHeight < 133.33 ? imgHeight :*/ 133.33

    const imgSrc = `/static/images/SFRRIExecutive/${kebabize(name)}.jpg`

    return (
        <Grid container spacing={0} sx={{ marginTop: '2em', }}>
            <Grid item xs={12} lg={2} sx={{ marginTop: '2em',/* paddingLeft: {xs: '2em', lg: 0,}*/ }}>
                {/* {loading && <Skeleton
                    variant="rounded"
                    width={maxImgWidth}
                    height={maxImgHeight}
                />} */}
                <div style={{
                    width: maxImgWidth,
                    height: maxImgHeight,
                    position: 'relative',
                }}>
                    {loading &&

                        <CircularProgress
                            sx={{
                                position: 'absolute',
                                top: '30%',
                                left: '50%',
                                translate: '-50% -50%',
                            }}
                        />
                    }
                    {name && <Image
                        priority
                        width={maxImgWidth}
                        height={maxImgHeight}
                        onLoad={() => setLoading(false)}
                        src={imgSrc}
                        alt={name}
                        style={{
                            width: '100%',
                            maxWidth: maxImgWidth,
                            height: 'auto',
                            // display: loading ? 'none' : 'block',
                            opacity: loading ? 0 : 1,
                            transitionProperty: 'opacity',
                            transitionDuration: '500ms',
                            transitionTimingFunction: 'cubic-bezier(0.7, 0, 0.6, 1)',
                        }}
                    />}
                </div>
            </Grid>
            <Grid item xs={12} lg={10} sx={{ padding: { lg: '0 1em' }, }}>
                <Grid container spacing={0}>
                    {title && <Grid item xs={12} sx={{ padding: { lg: '0 1em' }, }}><h4>{title}</h4></Grid>}
                    {name && <Grid item xs={12} sx={{ padding: { lg: '0 1em' }, }}><p className='bold'>{name}</p></Grid>}
                    <BioAccordion bio={bio} />
                    {address && <Grid item xs={12} lg={6} className='pNoMarginBottom' sx={{ padding: { lg: '0 1em' }, }}>
                        {/* <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(address) }} /> */}
                        <Markdown >{address}</Markdown>
                    </Grid>}
                    <Grid item xs={12} lg={6} className='pNoMarginBottom' sx={{ padding: { lg: '0 1em' }, }}>
                        {/* <p>
                            Tel:&nbsp;{tel}<br />
                            Email:&nbsp;<Link href={email} target="_blank">{email}</Link><br />
                            URL:&nbsp;<Link href={link} target="_blank">{link}</Link>
                        </p> */}
                        {contact_details && <Markdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }]]}>{contact_details}</Markdown>}
                    </Grid>
                </Grid>
            </Grid>
            <hr />
        </Grid>
    )
}

export default SFRRIExecutiveItem
