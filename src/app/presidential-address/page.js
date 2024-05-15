import * as React from 'react';
import data from '../../../_data/society/presidential-address.json'
import { MarkdownComponent } from '@/utils';
import ImageLoading from '../components/ImageLoading';

export default function PresidentialAddress() {
    return (
        <React.Fragment>
            {data.upload_path && <ImageLoading imgSrc={data.upload_path} name={data.name && data.name} prAdd={true} />}
            {data.body && <MarkdownComponent>{data.body}</MarkdownComponent>}
        </React.Fragment>
    );
}