import data from '../../../_data/careers-&-training.json'
import BasicPage from '../components/BasicPage';

const title = 'Careers and Training'

export const metadata = {
    title: title,
}

export default function CareersAndTraining() {
    return (
        <BasicPage
            title={title}
            dataArray={data.body}
        />
    );
}
