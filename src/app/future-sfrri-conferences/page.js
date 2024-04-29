import * as React from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/conferences/future-sfrri-conferences.json'
import NewsItem from '../components/NewsComponents'

export default function FutureSFRRIConferences() {
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Future SFRRI Conferences</h2>
                {data.future_sfrri_conferences && data.future_sfrri_conferences.map(item => (
                    <NewsItem
                        date={item.date}
                        title={item.meeting_title}
                        location={item.location}
                        link={item.further_information_link_hypertext ? item.further_information_link_hypertext : item.upload_path[0]}
                        linkText={item.further_information_link_text}
                        body={item.body}
                    />
                ))}
            </Paper>
        </main>
    );
}