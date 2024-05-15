import * as React from 'react';
import Paper from '@mui/material/Paper';
import NewsItem from './NewsComponents';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const MeetingStylePage = ({ title, dataArray, relatedMeetings, }) => {

    relatedMeetings && (dataArray = dataArray.filter(item => (
        item.add_to_related_meetings === true
    )))

    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <Typography variant="h2">{title}</Typography>
                {dataArray && dataArray.map(item => (
                    <React.Fragment key={item.meeting_title}>
                        <NewsItem
                            date={item.date}
                            title={item.meeting_title}
                            location={item.location}
                            link={item.further_information_link_hypertext ? item.further_information_link_hypertext : item.upload_path}
                            linkText={item.further_information_link_text}
                            body={item.body}
                        />
                        {console.log(item.upload_path)}
                        <Divider orientation="horizontal" flexItem sx={{ marginTop: '0 !important', marginBottom: '1em', }} />
                    </React.Fragment>
                ))}
            </Paper>
        </main>
    );
}

export default MeetingStylePage
