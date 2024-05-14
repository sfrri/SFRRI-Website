import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { MarkdownComponent } from '@/utils';
import ImageLoading from './ImageLoading';

const ImageLinkGridItem = ({ xs, md, href, src, name, body }) => {

    return (
        href && src && name ? <Grid item xs={xs} md={md}>
            <Box
                component={Link}
                href={href}
                target="_blank"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                {name && <ImageLoading imgSrc={src} name={name} />}
                <p>{name}</p>
            </Box>
            {body &&
                <MarkdownComponent>{body}</MarkdownComponent>
            }
        </Grid> : <div />
    )
}

export default ImageLinkGridItem
