'use client';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import SFRRIExecutiveItem from '../components/SFRRIExecutiveItem';
import data from '../../../_data/society/sfrri-executive.json'

export default function SFRRIExecutive() {
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2 style={{ marginBottom: '1em', }}>SFRRI Executive</h2>
                {data.sfrri_executive_member.map(item => (
                    <SFRRIExecutiveItem
                        // imgWidth={item.imgWidth}
                        // imgHeight={item.imgHeight}
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
                {/* {SFRRIExecutiveItems.map(item => (
                    <SFRRIExecutiveItem
                        imgWidth={item.imgWidth}
                        imgHeight={item.imgHeight}
                        imgSrc={item.imgSrc}
                        name={item.name}
                        title={item.title}
                        address={item.address}
                        tel={item.tel}
                        email={item.email}
                        link={item.link}
                        bio={item.bio}
                        key={item.title}
                    />
                ))} */}
            </Paper>
        </main>
    );
}