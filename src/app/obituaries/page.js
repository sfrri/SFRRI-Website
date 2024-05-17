import data from '../../../_data/society/obituaries.json'
import BasicPage from '../components/BasicPage';

const title = 'Obituaries'

export const metadata = {
    title: title,
}

export default async function Obituaries() {
    return (
        <BasicPage
            title={title}
            dataArray={data.body}
        />
    );
}