import data from '../../../_data/society/history.json'
import BasicPage from '../components/BasicPage';

export default async function History() {
    return (
        <BasicPage
            title='History'
            dataArray={data.body}
        />
    );
}