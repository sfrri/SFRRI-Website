import data from '../../../_data/conferences/past-sfrri-conferences.json'
import BasicPage from '../components/BasicPAge';

export default function PastSFRRIConferences() {
    return (
        <BasicPage
            title='Past SFRRI Conferences'
            dataArray={data.body}
        />
    );
}