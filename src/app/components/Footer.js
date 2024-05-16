import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { kebabize } from '../../utils';
import Image from 'next/image';

const colLinks = [
    [
        'History',
        'Membership',
        'SFRRI Executive',
        'SFRR Regional Societies',
    ],
    [
        'Past SFRRI Conferences',
        'Related Meetings',
        'Education',
        'Journals',
    ],
    [
        'Sitemap',
        'Disclaimer',
        'Contact',
    ]
]

const navColumns = [];
for (let i = 0; i < colLinks.length; i++) {
    navColumns.push(
        <Grid
            item
            xs={12}
            sm={6}
            md={2.8}
            key={i}
            sx={{
                borderLeft: {
                    xs: 'none',
                    sm: '1px solid rgba(255,255,255,0.5)',
                },
                paddingTop: '0 !important',
                marginTop: '16px',
            }}
        >
            <List>
                {colLinks[i].map(item =>
                    <ListItem
                        key={item}
                        sx={{ listStyle: 'none', }}
                    >
                        <Link
                            prefetch={false}
                            variant='HomeNav'
                            href={`/${kebabize(item)}`}
                        >
                            {item}
                        </Link>
                    </ListItem>
                )}
            </List>
        </Grid>
    );
}

export default function Footer() {
    return (
        <Box
            //component='footer'
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                background: 'radial-gradient(ellipse at top,#4282dd 0,#1d5097 90%)',
                marginTop: '10px',
            }}
        >
            <Container maxWidth='lg'>
                <Grid
                    container
                    spacing={2}
                    sx={{ position: 'relative' }}
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3.4}
                        sx={{
                            paddingRight: '32px',
                        }}
                    >
                        <Link href='/' prefetch={false}>
                            <Image
                                src={`/static/images/SFRRI-footer-logo.png`}
                                alt='SFRRI footer logo'
                                width={275}
                                height={80}/**/
                                loading='lazy'
                                draggable='false'
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    margin: '32px 0 0 0',
                                    maxWidth: '275px',
                                }}
                            />
                        </Link>
                    </Grid>
                    {navColumns}
                </Grid>
            </Container>
        </Box>
    )
}
