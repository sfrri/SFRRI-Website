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
        <Grid item xs={12} sm={6} md={3} key={i} sx={{borderLeft: '1px solid rgba(255,255,255,0.5)', paddingTop: '0 !important', marginTop:'16px', }}>
            <List>
                {colLinks[i].map(item =>
                    <ListItem key={item} sx={{listStyle: 'none', }}><Link variant='HomeNav' href={`/${kebabize(item)}`}>{item}</Link></ListItem>
                )}
            </List>
        </Grid>
    );
}

export default async function Footer() {
    return (
        <Box
            //component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                //backgroundColor: backgroundColor(theme)
                background: 'radial-gradient(ellipse at top,#4282dd 0,#1d5097 90%)',
                marginTop: '10px',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={2} sx={{ position: 'relative' }}>
                    <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', alignItems: 'center', }}>
                        <Link href="/" sx={{ display: 'inline-block' }}>
                            <Image
                                src={`/static/images/SFRRI-footer-logo.png?w=164&h=164&fit=crop&auto=format`}
                                alt="SFRRI footer logo"
                                loading="lazy"
                                draggable="false"
                                sx={{
                                    marginRight: '20px',
                                    opacity: 0.5,
                                    transition: 'opacity 300ms',
                                    '&:hover': {
                                        opacity: 1,
                                        transition: 'opacity 300ms',
                                    }
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
