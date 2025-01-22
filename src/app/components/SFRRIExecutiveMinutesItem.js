import * as React from 'react';

const SFRRIExecutiveMinutesItem = ({ minutes }) => {

    return (
        minutes.map(item => (
            <p key={item.meeting_title}>
                <a href={item.upload_path} target="_blank">
                    {item.meeting_title}
                </a>
            </p>
        ))
    )
}

export default SFRRIExecutiveMinutesItem
