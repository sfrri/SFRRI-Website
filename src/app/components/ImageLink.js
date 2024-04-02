import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { kebabize } from '../../utils';

export const ImageLink = ({ linkName, bgImgUrl }) => {
    return (
        <Link href={`/${kebabize(linkName)}`}>
            <Card
                sx={{ 
                    borderRadius: '3px', 
                    position: 'relative',
                    transition: 'opacity 300ms',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        backgroundColor: 'rgba(5, 0, 10, 0.25)',
                        opacity: 1,
                        transition: 'opacity 300ms',
                    },
                    '&:hover::before': {
                        opacity: 0.5,
                        transition: 'opacity 300ms',
                    }
                
                }}
                elevation={3}
            >
                <CardMedia
                    component="img"
                    height="202"
                    image={bgImgUrl}
                    alt={`${linkName} link image`}
                />
                <Box sx={{ 
                    position: 'absolute',
                    bottom: 0,
                    padding: '0 20px 12px',
                }}
                color="text.secondary"
                >
                    <h3>{linkName.toString()}</h3>
                </Box>
            </Card>
        </Link>
    )
}
