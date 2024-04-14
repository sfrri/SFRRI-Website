import * as React from 'react';
import Paper from '@mui/material/Paper';
import { relatedMeetingsItems } from '../contentData/RelatedMeetingsData';
import { NewsItem } from '../components/NewsComponents';

export default async function ForthcomingRelatedMeetings() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Forthcoming Related Meetings</h2>
                {relatedMeetingsItems.map(item => (
                    <NewsItem
                        date={item.date}
                        title={item.title}
                        location={item.location}
                        link={item.link}
                        linkText={item.linkText}
                        key={item.title}
                    />
                ))}
            </Paper>
        </main>
    );
}