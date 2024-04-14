'use client';
import React from "react";
import Link from 'next/link'
import { AwardLectureItem, NewsItem, InMemoriamItem } from './NewsComponents'
import { SFRRI2023AwardLectures, newsItems, inMemoriamItems } from '../contentData/NewsData'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider';
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';

export const News = home => {

    const Item = styled(Box)(() => ({
        position: 'relative',
        padding: home === true ? '2px 10px' : '2px 0',
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
                <p><Link href='/presidential-address'>President&apos;s Welcome Message 2024</Link></p>
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
                </ul>
            </Item>
            {newsItems.map(item => (
                <Item key={item.title}>
                    <NewsItem
                        date={item.date}
                        title={item.title}
                        location={item.location}
                        link={item.link}
                        linkText={item.linkText}
                    />
                </Item>
            ))}
            <Item>
                <p>
                    <span className="bold">SFRRI Outreach Meeting Sponsorship Form</span><br />
                    <a href="downloads/SFRRI_Outreach_Sponsorship_Application_Form_2019.doc" target="_blank">Please click here to download</a>
                </p>
            </Item>
            <Item>
                <p className="bold">In Memoriam</p>
            </Item>
            {inMemoriamItems.map(item => (
                <Item key={item.person}>
                    <InMemoriamItem
                        link={item.link}
                        person={item.person}
                    />
                </Item>
            ))}
        </Stack>
    )
}
