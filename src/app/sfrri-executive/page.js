import * as React from 'react';
import SFRRIExecutiveItem from '../components/SFRRIExecutiveItem';
import data from '../../../_data/society/sfrri-executive.json'
import Typography from '@mui/material/Typography';

const title = 'SFRRI Executive'

export const metadata = {
    title: title,
}

export default function SFRRIExecutive() {
    return (
        <React.Fragment>
            <Typography variant="h2" sx={{ marginBottom: '1em', }}>{title}</Typography>
            {data.sfrri_executive_members && data.sfrri_executive_members.map(item => (
                <SFRRIExecutiveItem
                    imgSrc={item.upload_path}
                    title={item.title}
                    name={item.name}
                    bio={item.bio}
                    address={item.address}
                    contact_details={item.contact_details}
                    tel={item.tel}
                    email={item.email}
                    link={item.link}
                    key={item.title}
                />
            ))}
        </React.Fragment>
    );
}
