import * as React from 'react';
import Paper from '@mui/material/Paper';
import { relatedMeetingsItems } from '../contentData/RelatedMeetingsData';
import { NewsItem } from '../components/NewsComponents';
import data from '../../../_data/news/meetings.json'
// import Markdown from 'react-markdown'
// import rehypeExternalLinks from 'rehype-external-links'

export default async function ForthcomingRelatedMeetings() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Forthcoming Related Meetings</h2>
                {data.meetings.map(item => (
                    item.add_to_related_meetings === true &&
                    <NewsItem
                        date={item.date}
                        title={item.meeting_title}
                        location={item.location}
                        link={item.further_information_link_hypertext ? item.further_information_link_hypertext : item.upload_path[0]}
                        linkText={item.further_information_link_text}
                        key={item.meeting_title}
                    />
                ))}
                {/* {relatedMeetingsItems.map(item => (
                    <NewsItem
                        date={item.date}
                        title={item.title}
                        location={item.location}
                        link={item.link}
                        linkText={item.linkText}
                        key={item.title}
                    />
                ))} */}
            </Paper>
        </main>
    );
}