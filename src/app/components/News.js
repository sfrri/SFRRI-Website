'use client';
import React from "react";
import { NewsItem } from './NewsComponents'
import beforeMeetingsData from '../../../_data/news/before-meetings.json'
import meetingsData from '../../../_data/news/meetings.json'
import afterMeetingsData from '../../../_data/news/after-meetings.json'
import inMemoriamData from '../../../_data/news/in-memoriam.json'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider';
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import Markdown from 'react-markdown'
import { usePathname } from "next/navigation";
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'

export const News = () => {
    const pathname = usePathname();
    const Item = styled(Box)(() => ({
        position: 'relative',
        padding: pathname === '/' ? '2px 10px' : '2px 0',
        pageBreakInside: 'avoid',                 /* Theoretically FF 20+ */
        breakInside: 'avoid-column',              /* Chrome, Safari, IE 11 */
        // display: 'table',                      /* Actually FF 20+ */

    }));

    return (
        <Stack
            direction="column"
            divider={<Divider orientation="horizontal" flexItem />}
            spacing={2}
            sx={{
                columns: '2 490px',
                display: 'block',
            }}
        >
            <Item>
                <Markdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }], [rehypeRaw]]}>
                    {beforeMeetingsData.body}
                </Markdown>
            </Item>
            {meetingsData.meetings.map(item => (
                <Item key={item.meeting_title}>
                    <NewsItem
                        date={item.date}
                        title={item.meeting_title}
                        location={item.location}
                        link={item.further_information_link_hypertext ? item.further_information_link_hypertext : item.upload_path[0] ? item.upload_path[0] : ''}
                        linkText={item.further_information_link_text}
                    />
                </Item>
            ))}
            <Item>
                <Markdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }], [rehypeRaw]]}>
                    {afterMeetingsData.body}
                </Markdown>
            </Item>
            <Item>
                <p className="bold">In Memoriam</p>
                {inMemoriamData.in_memoriam.map((item, i) => (
                    <span style={{ fontVariant: 'small-caps', textTransform: 'capitalize', position: 'relative', }} key={i}>
                        <Markdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }], [rehypeRaw]]}>
                            {item.name}
                        </Markdown>
                    </span>
                ))}
            </Item>
        </Stack>
    )
}
