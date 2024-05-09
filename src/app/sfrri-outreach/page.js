import * as React from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/sfrri-outreachnew.json'
import Typography from '@mui/material/Typography';

export default async function SFRRISponsoredConferences() {
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <Typography variant="h2">SFRRI Sponsored Conferences</Typography>
                {data.outreach_years && data.outreach_years.map(item => {
                    return <React.Fragment key={item.year}><h4>{item.year}</h4>
                        {item.meetings.map(entry => {
                            return <p>
                                <a
                                    href={entry.link_hypertext ? entry.link_hypertext : entry.upload_path[0]}
                                    target="_blank"
                                    key={entry.link_text}
                                >
                                    {entry.link_text}
                                </a>
                            </p>
                        })}
                    </React.Fragment>
                })}
            </Paper>
        </main>
    );
}