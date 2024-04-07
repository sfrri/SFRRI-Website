'use client';
import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Image from 'next/image';
import Skeleton from '@mui/material/Skeleton';

const ImageLinkGridItem = ({ xs, md, href, width, height, src, name, listItems }) => {
    const [loading, setLoading] = useState(true);
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
                {loading && <Skeleton variant="rectangular" width={width} height={height} />}
                <Image
                    width={width}
                    height={height}
                    onLoad={(e) => setLoading(false)}
                    src={`/static/images${src}`}
                    alt={`${name} logo`}
                    style={{ display: loading ? 'none' : 'block' }}
                    priority
                />
                <p>{name}</p>
            </Box>
            {listItems &&
                <ul>
                    {listItems.map((item, i) => (
                        <li dangerouslySetInnerHTML={{ __html: item }} key={i} />
                    ))}
                </ul>
            }
        </Grid>
    )
}

export default ImageLinkGridItem
