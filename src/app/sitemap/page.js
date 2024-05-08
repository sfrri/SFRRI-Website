import * as React from 'react';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import navItems from '../components/NavItems';
import { kebabize } from '@/utils';
import Typography from '@mui/material/Typography';

export default async function Sitemap() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <Typography variant="h2">Sitemap</Typography>
                <ul>
                    {navItems.map(item => (
                        item.subMenu != undefined ?
                            <li key={item.name}><span>{item.name}</span>
                                <ul>
                                    {item.subMenu.map(subItem => {
                                        return <li key={subItem.name}><Link href={kebabize(subItem.name)}>{subItem.name}</Link></li>
                                    })}
                                </ul>
                            </li>
                            :
                            <li style={{marginBottom: '1em',}} key={item.name}><Link href={item.name === 'Home' ? '' : kebabize(item.name)}>{item.name}</Link></li>
                    ))}
                </ul>
                <ul>
                    <li style={{marginBottom: '1em',}}><Link href="sitemap">Sitemap</Link></li>
                    <li style={{marginBottom: '1em',}}><Link href="disclaimer">Disclaimer</Link></li>
                    <li style={{marginBottom: '1em',}}><Link href="contact">Contact</Link></li>
                </ul>
            </Paper>
        </main>
    );
}