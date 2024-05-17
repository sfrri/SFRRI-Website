import data from '../../../_data/membership.json'
import BasicPage from '../components/BasicPage';

const title = 'Membership'

export const metadata = {
    title: title,
}

export default function Membership() {
    return (
        <BasicPage
            title={title}
            dataArray={data.body}
        />
    );
}