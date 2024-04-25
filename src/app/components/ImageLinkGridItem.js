'use client';
import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Image from 'next/image';
// import Skeleton from '@mui/material/Skeleton';
// import DOMPurify from 'isomorphic-dompurify';
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'
import CircularProgress from '@mui/material/CircularProgress';

const ImageLinkGridItem = ({ xs, md, href,/* width, height,*/ src, name, body }) => {
    const [loading, setLoading] = useState(true);
    const maxImgWidth = /*imgWidth < 133.33 ? imgWidth :*/ 133.33
    const maxImgHeight = /*imgHeight < 133.33 ? imgHeight :*/ 133.33

    return (
        href && src && name ? <Grid item xs={xs} md={md}>
            <Box
                component={Link}
                href={href}
                target="_blank"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative'
                }}
            >
                {/* {loading && <Skeleton 
                                variant="rounded" 
                                width={maxImgWidth} 
                                height={maxImgHeight} 
                            />
                } */}
                <div style={{
                    width: maxImgWidth,
                    height: maxImgHeight,
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
                    <Image
                        priority
                        width={maxImgWidth}
                        height={maxImgHeight}
                        onLoad={(e) => setLoading(false)}
                        src={src}
                        alt={`${name}`}
                        style={{
                            width: 'auto',
                            maxWidth: maxImgWidth,
                            height: 'auto',
                            maxHeight: maxImgHeight,
                            // display: loading ? 'none' : 'block',
                            opacity: loading ? 0 : 1,
                            transitionProperty: 'opacity',
                            transitionDuration: '500ms',
                            transitionTimingFunction: 'cubic-bezier(0.7, 0, 0.6, 1)',
                        }}
                    />
                </div>
                <p>{name}</p>
            </Box>
            {body &&
                <Markdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }], [rehypeRaw]]}>{body}</Markdown>
            }
        </Grid> : <div />
    )
}

export default ImageLinkGridItem
