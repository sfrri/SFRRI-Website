import * as React from 'react';
import SFRRIExecutiveMinutesItem from '../components/SFRRIExecutiveMinutesItem';
import data from '../../../_data/society/sfrri-executive-minutes.json'
import Typography from '@mui/material/Typography';

const title = 'SFRRI Executive Minutes'

export const metadata = {
    title: title,
}

export default function SFRRIExecutiveMinutes() {

    return (
        <React.Fragment>
            <Typography variant="h2" sx={{ marginBottom: '1em', }}>{title}</Typography>
            {data.minutes_years && data.minutes_years.map(item => (
                <>
                    <Typography variant="h4" sx={{ marginBottom: '1em', }}>{item.year}</Typography>
                    <SFRRIExecutiveMinutesItem
                        minutes={item.minutes}
                        key={item.year}
                    />
                </>
            ))}
        </React.Fragment>
    );
}
