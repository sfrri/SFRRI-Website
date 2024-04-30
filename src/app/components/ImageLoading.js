'use client';
import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import CircularProgress from '@mui/material/CircularProgress';

const ImageLoading = ({ imgSrc, name, prAdd }) => {
    const [loading, setLoading] = useState(true);
    const maxImgWidth = /*imgWidth < 133.33 ? imgWidth :*/ 133.33
    const maxImgHeight = /*imgHeight < 133.33 ? imgHeight :*/ 133.33

    return (
        <div style={{
            width: maxImgWidth,
            height: '180px',
            position: 'relative',
            float: prAdd ? 'right' : 'auto', 
            margin: prAdd ? '11px 18px' : 0,
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
            />
        </div>
    )
}

export default ImageLoading
