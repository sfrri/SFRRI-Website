import data from '../../../_data/society/history.json'
import BasicPage from '../components/BasicPage';

const title = 'History'

export const metadata = {
    title: title,
}

export default async function History() {
    return (
        <BasicPage
            title={title}
            dataArray={data.body}
        />
    );
}