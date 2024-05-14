import data from '../../../_data/education.json'
import BasicPage from '../components/BasicPage';

export default function EducationalResources() {
    return (
        <BasicPage
            title='Educational Resources'
            dataArray={data.body}
        />
    );
}