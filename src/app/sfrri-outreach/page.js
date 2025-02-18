import * as React from 'react';
import data from '../../../_data/sfrri-outreach.json'
import Typography from '@mui/material/Typography';
import { MarkdownComponent } from '@/utils';
import SFRRIOutreachItem from '../components/SFRRIOutreachItem';

const title = 'SFRRI Sponsored Conferences'

export const metadata = {
    title: title,
}

export default async function SFRRISponsoredConferences() {
    return (
        <React.Fragment>
            <Typography variant="h2">{title}</Typography>
            {data.body && <MarkdownComponent>{data.body}</MarkdownComponent>}
            {data.outreach_years && data.outreach_years.map(item => {
                return <React.Fragment key={item.year}>
                    <Typography variant='h4'>{item.year}</Typography>
                    {item.meetings.map(entry => {
                        return <SFRRIOutreachItem
                            link={entry.link_hypertext ? entry.link_hypertext : entry.upload_path}
                            text={entry.link_text}
                            key={entry.link_text}
                        />
                    })}
                </React.Fragment>
            })}
        </React.Fragment>
    );
}