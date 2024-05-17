import data from '../../../_data/society/past-presidents.json'
import BasicPage from '../components/BasicPage';

const title = 'Past Presidents'

export const metadata = {
    title: title,
}

export default async function PastPresidential() {
    return (
        <BasicPage
            title={title}
            dataArray={data.body}
        />
    );
}