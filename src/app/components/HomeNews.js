'use client';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Image from 'next/image';

export default function HomeNews({ children }) {
    const bgImgUrl = '/static/images/Hinge_top_vials_on_a_vial_rack.jpg'
    return (
        <Paper
            // variant="padded"
            className={'MuiPaper-elevation3'}
            sx={{
                marginBottom: '10px',
                // backgroundImage: 'url(/static/images/Hinge_top_vials_on_a_vial_rack.jpg)',
                // backgroundRepeat: 'no-repeat',
                // backgroundSize: 'cover',
                color: '#fff',
                position: 'relative',
                borderRadius: '3px',
                zIndex: 0,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: 'rgba(57, 51, 39, 0.65)',
                    backgroundColor: 'rgba(5, 0, 10, 0.75)',
                    zIndex: 1,
                },
                '& a': {
                    color: '#fff',
                },
                '& hr': {
                    display: 'none',
                },
            }}
        >
            <picture style={{ borderRadius: '3px', }}>
                <source
                    srcSet={`${bgImgUrl}`}//?width=1280&height=720&format=jpg
                    type="image/jpg"
                />
                <Image
                    priority
                    src={`${bgImgUrl}`}//?width=1280&height=720&format=auto
                    alt='Hinge_top_vials_on_a_vial_rack'
                    width={1280}
                    height={720}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        objectFit: 'cover',
                        borderRadius: '3px',
                    }}
                />
            </picture>
            <div style={{
                zIndex: 1,
                position: 'relative',
                padding: '30px',
                display: 'block',
            }}>
                {children}
            </div>
        </Paper>
    );
}