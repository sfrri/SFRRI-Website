import * as React from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/conferences/future-sfrri-conferences.json'
import NewsItem from '../components/NewsComponents'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export default function FutureSFRRIConferences() {
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <Typography variant="h2">Future SFRRI Conferences</Typography>
                {data.future_sfrri_conferences && data.future_sfrri_conferences.map(item => (
                    <React.Fragment>
                        <NewsItem
                            date={item.date}
                            title={item.meeting_title}
                            location={item.location}
                            link={item.further_information_link_hypertext ? item.further_information_link_hypertext : item.upload_path[0]}
                            linkText={item.further_information_link_text}
                            body={item.body}
                            key={item.meeting_title}
                        />
                        <Divider orientation="horizontal" flexItem sx={{ marginTop: '0 !important', }} />
                    </React.Fragment>
                ))}
            </Paper>
        </main>
    );
}