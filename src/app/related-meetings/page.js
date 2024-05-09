import * as React from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/news/meetings.json'
import NewsItem from '../components/NewsComponents';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default async function ForthcomingRelatedMeetings() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <Typography variant="h2">Forthcoming Related Meetings</Typography>
                {data.meetings && data.meetings.map(item => (
                    item.add_to_related_meetings === true &&
                    <React.Fragment key={item.meeting_title}>
                        <NewsItem
                            date={item.date}
                            title={item.meeting_title}
                            location={item.location}
                            link={item.further_information_link_hypertext ? item.further_information_link_hypertext : item.upload_path[0]}
                            linkText={item.further_information_link_text}
                        />
                        <Divider orientation="horizontal" flexItem sx={{ marginTop: '0 !important', marginBottom: '1em', }} />
                    </React.Fragment>
                ))}
            </Paper>
        </main>
    );
}