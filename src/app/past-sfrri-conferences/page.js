import data from '../../../_data/conferences/past-sfrri-conferences.json'
import BasicPage from '../components/BasicPage';

const title = 'Past SFRRI Conferences'

export const metadata = {
    title: title,
}

export default function PastSFRRIConferences() {
    return (
        <BasicPage
            title={title}
            dataArray={data.body}
        />
    );
}