'use client';
import { useState } from 'react';
import Link from '@mui/material/Link';
import Image from 'next/image';
import { CircularProgress } from '@mui/material';

const JournalSocieties = ({ url, name, imgSrc, width, height, }) => {
    const [loading, setLoading] = useState(true);
    return (
        <Link
            prefetch={false}
            href={url}
            sx={{ display: 'inline-block', padding: '0 9px', position: 'relative', }}
            target="_blank"
            key={name}
        >
            {loading &&
                <CircularProgress
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        translate: '-50% -50%',
                    }}
                />
            }
            <Image
                priority
                src={imgSrc}
                width={width}
                height={height}
                alt={`${name} Logo`}
                onLoad={() => setLoading(false)}
                style={{
                    opacity: loading ? 0 : 1,
                    transitionProperty: 'opacity',
                    transitionDuration: '500ms',
                    transitionTimingFunction: 'cubic-bezier(0.7, 0, 0.6, 1)',
                }}
            />
        </Link>
    )
}

export default JournalSocieties
