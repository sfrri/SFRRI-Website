'use client';
import * as React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import CircularProgress from '@mui/material/CircularProgress';
import { CustomBreakpoints } from '@/utils';
import Box from '@mui/material/Box';

const ImageLoading = ({ imgSrc, name, prAdd }) => {
    const [loading, setLoading] = useState(true);
    const maxImgWidth = /*imgWidth < 133.33 ? imgWidth :*/ 133.33
    const maxImgHeight = /*imgHeight < 133.33 ? imgHeight :*/ 133.33

    return (
        <CustomBreakpoints>
            <Box sx={{
                width: maxImgWidth,
                height: prAdd ? 'auto' : '180px',
                position: 'relative',
                float: { xs: 'left', sm: 'right' } ,
                margin: prAdd ? '11px 18px' : 0,
            }}>
                {console.log( prAdd ? { xs: 'left', sm: 'right' } : 'auto',)}
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
            </Box>
        </CustomBreakpoints>
    )
}

export default ImageLoading
