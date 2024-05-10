import data from '../../../_data/careers-&-training.json'
import BasicPage from '../components/BasicPAge';

export default function CareersAndTraining() {
    return (
        <BasicPage
            title='Careers and Training'
            dataArray={data.body}
        />
    );
}
