import data from '../../../_data/society/obituaries.json'
import BasicPage from '../components/BasicPage';

export default async function Obituaries() {
    return (
        <BasicPage
            title='Obituaries'
            dataArray={data.body}
        />
    );
}