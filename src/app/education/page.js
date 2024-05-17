import data from '../../../_data/education.json'
import BasicPage from '../components/BasicPage';

const title = 'Educational Resources'

export const metadata = {
    title: title,
}

export default function EducationalResources() {
    return (
        <BasicPage
            title={title}
            dataArray={data.body}
        />
    );
}