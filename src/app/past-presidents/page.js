import data from '../../../_data/society/past-presidents.json'
import BasicPage from '../components/BasicPage';

export default async function PastPresidential() {
    return (
        <BasicPage
            title='Past Presidents'
            dataArray={data.body}
        />
    );
}