import * as React from 'react';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import navItems from '../components/NavItems';
import { kebabize } from '@/utils';

export default async function Sitemap() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Sitemap</h2>
                <ul>
                    {navItems.map(item => (
                        item.subMenu != undefined ?
                            <li>{item.name}
                                <ul>
                                    {item.subMenu.map(subItem => {
                                        return <li><Link href={kebabize(subItem.name)} key={subItem.name}>{subItem.name}</Link></li>
                                    })}
                                </ul>
                            </li>
                            :
                            <li><Link href={item.name === 'Home' ? '' : kebabize(item.name)} key={item.name}>{item.name}</Link></li>
                    ))}
                </ul>
                <ul>
                    <li><Link href="sitemap">Sitemap</Link></li>
                    <li><Link href="disclaimer">Disclaimer</Link></li>
                    <li><Link href="contact">Contact</Link></li>
                </ul>
            </Paper>
        </main>
    );
}