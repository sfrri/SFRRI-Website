import * as React from 'react';
import data from '../../../_data/society/presidential-address.json'
import { MarkdownComponent } from '@/utils';
import ImageLoading from '../components/ImageLoading';

export default function PresidentialAddress() {
    let imgSrc = data.upload_path

    if (imgSrc.startsWith('public')) {
        imgSrc = imgSrc.replace('public', '')
    }

    return (
        <React.Fragment>
            {imgSrc && <ImageLoading imgSrc={imgSrc} name={data.name && data.name} prAdd={true} />}
            {data.body && <MarkdownComponent>{data.body}</MarkdownComponent>}
        </React.Fragment>
    );
}
