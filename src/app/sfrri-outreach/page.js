import * as React from 'react';
import data from '../../../_data/sfrri-outreach.json'
import Typography from '@mui/material/Typography';

export default async function SFRRISponsoredConferences() {
    return (
        <React.Fragment>
            <Typography variant="h2">SFRRI Sponsored Conferences</Typography>
            {data.outreach_years && data.outreach_years.map(item => {
                return <React.Fragment key={item.year}>
                    <Typography variant='h4'>{item.year}</Typography>
                    {item.meetings.map(entry => {
                        return <p key={entry.link_text}>
                            <a
                                href={entry.link_hypertext ? entry.link_hypertext : entry.upload_path}
                                target="_blank"
                            >
                                {entry.link_text}
                            </a>
                        </p>
                    })}
                </React.Fragment>
            })}
        </React.Fragment>
    );
}