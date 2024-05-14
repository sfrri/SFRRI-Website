import data from '../../../_data/conferences/past-sfrri-conferences.json'
import BasicPage from '../components/BasicPage';

export default function PastSFRRIConferences() {
    return (
        <BasicPage
            title='Past SFRRI Conferences'
            dataArray={data.body}
        />
    );
}