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
                // width: maxImgWidth,
                // height: prAdd ? 'auto' : '180px',
                // height: 'auto',
                height: '160px',
                // minHeight: '140px',
                position: 'relative',
                float: prAdd ? { xs: 'left', sm: 'right' } : 'auto',
                margin: prAdd ? { xs: '0 100px 11px 0', sm: '11px 18px' } : '0 auto',
                paddingBottom: '20px',
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
                    fetchPriority='high'
                    width={maxImgWidth}
                    // height={maxImgHeight}
                    // width={'auto'}
                    height={140}
                    onLoad={() => setLoading(false)}
                    src={imgSrc}
                    alt={`image of ${name}`}
                    style={{
                        // width: '100%',
                        width: 'auto',
                        // maxWidth: maxImgWidth,
                        // height: 'auto',
                        height: '140px',
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
