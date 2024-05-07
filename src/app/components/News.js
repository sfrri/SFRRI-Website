import React from "react";
import NewsItem from './NewsComponents'
import beforeMeetingsData from '../../../_data/news/before-meetings.json'
import meetingsData from '../../../_data/news/meetings.json'
import afterMeetingsData from '../../../_data/news/after-meetings.json'
import inMemoriamData from '../../../_data/news/in-memoriam.json'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider';
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'
import NewsBox from './NewsBox'

export const News = () => {

    return (
        <Stack
            direction="column"
            divider={<Divider orientation="horizontal" flexItem sx={{ marginTop: '0 !important', }} />}
            spacing={2}
            sx={{
                columns: '2 490px',
                display: 'block',
            }}
        >
            <NewsBox>
                {beforeMeetingsData.body && <Markdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }], [rehypeRaw]]}>
                    {beforeMeetingsData.body}
                </Markdown>}
            </NewsBox>
            {meetingsData.meetings && meetingsData.meetings.map(item => (
                <NewsBox key={item.meeting_title}>
                    <NewsItem
                        date={item.date}
                        title={item.meeting_title}
                        location={item.location}
                        link={item.further_information_link_hypertext ? item.further_information_link_hypertext : item.upload_path[0] ? item.upload_path[0] : ''}
                        linkText={item.further_information_link_text}
                        body={item.body}
                    />
                </NewsBox>
            ))}
            <NewsBox>
                {afterMeetingsData.body && <Markdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }], [rehypeRaw]]}>
                    {afterMeetingsData.body}
                </Markdown>}
            </NewsBox>
            <NewsBox>
                <p className="bold">In Memoriam</p>
                {inMemoriamData.in_memoriam && inMemoriamData.in_memoriam.map((item, i) => (
                    <span style={{ fontVariant: 'small-caps', textTransform: 'capitalize', position: 'relative', }} key={i}>
                        <Markdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }], [rehypeRaw]]}>
                            {item.name}
                        </Markdown>
                    </span>
                ))}
            </NewsBox>
        </Stack>
    )
}
