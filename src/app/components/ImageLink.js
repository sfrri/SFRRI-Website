// 'use client';
import * as React from 'react';
import Link from '@mui/material/Link';
import { kebabize } from '../../utils';
import Paper from '@mui/material/Paper';
import Image from 'next/image';

const ImageLink = ({ linkName, bgImgUrl }) => {
    return (
        <Link href={`/${kebabize(linkName)}`} prefetch={false}>
            <Paper
                sx={{
                    // width: '290px',
                    height: '202px',
                    position: 'relative',
                    borderRadius: '3px', 
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        backgroundColor: 'rgba(5, 0, 10, 0.25)',
                    }
                }}
                elevation={3}
            >
                <picture style={{borderRadius: '3px', }}>
                    <source
                        srcSet={`${bgImgUrl}?width=290&height=202&format=jpg`}
                        type="image/jpg"
                    />
                    <Image
                        src={`${bgImgUrl}?width=290&height=202&format=auto`}
                        alt={`${linkName} link image`}
                        width={290}
                        height={202}
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
                    }}
                >
                    {linkName}
                </h2>
            </Paper>
        </Link>
    )
}

export default ImageLink
