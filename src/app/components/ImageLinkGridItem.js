'use client';
import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';
import DOMPurify from 'isomorphic-dompurify';
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'

const ImageLinkGridItem = ({ xs, md, href,/* width, height,*/ src, name, body }) => {
    const [loading, setLoading] = useState(true);
    const maxImgWidth = /*imgWidth < 133.33 ? imgWidth :*/ 133.33
    const maxImgHeight = /*imgHeight < 133.33 ? imgHeight :*/ 133.33

    return (
        <Grid item xs={xs} md={md}>
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
                {loading && <Skeleton 
                                variant="rounded" 
                                width={maxImgWidth} 
                                height={maxImgHeight} 
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
                        display: loading ? 'none' : 'block',
                      }}
                />
                <p>{name}</p>
            </Box>
            {body &&
                <Markdown rehypePlugins={[[rehypeExternalLinks, {target: '_blank'}], [rehypeRaw]]}>{body}</Markdown>
            }
        </Grid>
    )
}

export default ImageLinkGridItem
