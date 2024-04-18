'use client';
import React from "react";
import Link from 'next/link'
import { AwardLectureItem, NewsItem, InMemoriamItem } from './NewsComponents'
import { SFRRI2023AwardLectures, newsItems, inMemoriamItems } from '../contentData/NewsData'
import * as beforeMeetingsData from '../../../_data/news/before-meetings.json'
import { meetings } from '../../../_data/news/meetings.json'
import * as afterMeetingsData from '../../../_data/news/after-meetings.json'
import { in_memoriam } from '../../../_data/news/in-memoriam.json'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider';
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import Markdown from 'react-markdown'
import { usePathname } from "next/navigation";
import rehypeExternalLinks from 'rehype-external-links'

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
            <Markdown rehypePlugins={[[rehypeExternalLinks, {target: '_blank'}]]}>{beforeMeetingsData.body}</Markdown>
                {/* <p><Link href='/presidential-address'>President&apos;s Welcome Message 2024</Link></p>
                <p>
                    <a href="downloads/SFRRI_Letter_to_Regional_SFRR_Executives_and_Member_12-09-23.pdf" target="_blank">President&apos;s Letter | Extension of SFRRI Officers Term for 1-year</a>
                </p> 
            </Item>
            <Item>
                <p className="bold">SFRRI 2023 Award Lectures</p>
                <ul>
                    {SFRRI2023AwardLectures.map(item => (
                        <AwardLectureItem
                            link={item.link}
                            person={item.person}
                            award={item.award}
                            key={item.award}
                        />
                    ))}
                </ul>*/}
            </Item>
            {meetings.map(item => (
                <Item key={item["Meeting Title"]}>
                    <NewsItem
                        date={item.date}
                        title={item["Meeting Title"]}
                        location={item["location"]}
                        link={item["further information link hypertext"] ? item["further information link hypertext"] : item["upload_path"][0]}
                        linkText={item["further information link text"]}
                    />
                </Item>
            ))}
             {/* {newsItems.map(item => (
                <Item key={item.title}>
                    <NewsItem
                        date={item.date}
                        title={item.title}
                        location={item.location}
                        link={item.link}
                        linkText={item.linkText}
                    />
                </Item>
            ))}  */}
            <Item>
            <Markdown rehypePlugins={[[rehypeExternalLinks, {target: '_blank'}]]}>{afterMeetingsData.body}</Markdown>
                {/* <p>
                    <span className="bold">SFRRI Outreach Meeting Sponsorship Form</span><br />
                    <a href="downloads/SFRRI_Outreach_Sponsorship_Application_Form_2019.doc" target="_blank">Please click here to download</a>
                </p> */}
            </Item>
            <Item>
                <p className="bold">In Memoriam</p>
            </Item>
            {in_memoriam.map((item, i) => (
                <Item sx={{ fontVariant: 'small-caps', textTransform: 'capitalize', }} key={i}>
                    <Markdown rehypePlugins={[[rehypeExternalLinks, {target: '_blank'}]]}>{item["Name"]}</Markdown>
                </Item>
            ))}
            {/* {inMemoriamItems.map(item => (
                <Item key={item.person}>
                    <InMemoriamItem
                        link={item.link}
                        person={item.person}
                    />
                </Item>
            ))} */}
        </Stack>
    )
}
