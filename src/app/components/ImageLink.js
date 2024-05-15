'use client';
import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { kebabize } from '@/utils';
import Paper from '@mui/material/Paper';
import Image from 'next/image';

const ImageLink = ({ linkName, bgImgUrl }) => {
    const [ hovered, setHovered ] = useState(false)
    return (
        linkName ? <Paper
                component={Link}
                href={`/${kebabize(linkName)}`}
                prefetch={false}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                sx={{
                    // width: '290px',
                    height: '202px',
                    position: 'relative',
                    display: 'block',
                    borderRadius: '3px', 
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        transition: '500ms all cubic-bezier(0.4, 0, 0.2, 1)',
                        backgroundColor: hovered ? 'rgba(5, 0, 10, 0.0)' : 'rgba(5, 0, 10, 0.25)',
                        opacity: hovered ? 0 : 1,
                        zIndex: 1,
                    }
                }}
                elevation={3}
            >
                <picture style={{borderRadius: '3px', }}>
                    <source
                        srcSet={`${bgImgUrl}`}/*?width=290&height=202&format=jpg*/
                        type="image/jpg"
                    />
                    <Image
                        src={`${bgImgUrl}`}/*?width=290&height=202&format=auto*/
                        alt={`${linkName} link image`}
                        width={290}
                        height={202}
                        placeholder="blur"
                        blurDataURL={`${bgImgUrl}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            objectFit: 'cover',
                            borderRadius: '3px', 
                        }}
                    />
                </picture>
                <h2 style={{
                        marginBottom: 0,
                        position: 'absolute',
                        bottom: 0,
                        padding: '0 20px 12px',
                        color: '#fff',
                        zIndex: 1,
                    }}
                >
                    {linkName}
                </h2>
            </Paper> : <div />
    )
}

export default ImageLink
