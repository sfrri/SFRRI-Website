import * as React from 'react';
import Link from 'next/link';
import navItems from '../components/NavItems';
import { kebabize } from '@/utils';
import Typography from '@mui/material/Typography';

const title = 'Sitemap'

export const metadata = {
    title: title,
}

export default async function Sitemap() {
    "use server";
    return (
        <React.Fragment>
            <Typography variant="h2">{title}</Typography>
            <ul>
                {navItems.map(item => (
                    item.subMenu != undefined ?
                        <li key={item.name}><span>{item.name}</span>
                            <ul>
                                {item.subMenu.map(subItem => {
                                    return <li key={subItem.name}><Link href={kebabize(subItem.name)} prefetch={false}>{subItem.name}</Link></li>
                                })}
                            </ul>
                        </li>
                        :
                        <li style={{ marginBottom: '1em', }} key={item.name}><Link href={item.name === 'Home' ? '' : kebabize(item.name)} prefetch={false}>{item.name}</Link></li>
                ))}
            </ul>
            <ul>
                <li style={{ marginBottom: '1em', }}><Link href="sitemap" prefetch={false}>Sitemap</Link></li>
                <li style={{ marginBottom: '1em', }}><Link href="disclaimer" prefetch={false}>Disclaimer</Link></li>
                <li style={{ marginBottom: '1em', }}><Link href="contact" prefetch={false}>Contact</Link></li>
            </ul>
        </React.Fragment>
    );
}