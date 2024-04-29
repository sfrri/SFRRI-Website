import * as React from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/conferences/past-sfrri-related-conferences.json'
import NewsItem from '../components/NewsComponents'

export default function SFRRIRelatedConferences() {
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Past SFRRI Related Conferences</h2>
                {data.past_sfrri_related_conferences && data.past_sfrri_related_conferences.map(item => (
                    <NewsItem
                        date={item.date}
                        title={item.meeting_title}
                        location={item.location}
                        link={item.further_information_link_hypertext ? item.further_information_link_hypertext : item.upload_path[0]}
                        linkText={item.further_information_link_text}
                        body={item.body}
                        key={item.meeting_title}
                    />
                ))}
            </Paper>
        </main>
    );
}