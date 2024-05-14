import data from '../../../_data/membership.json'
import BasicPage from '../components/BasicPage';

export default function Membership() {
    return (
        <BasicPage
            title='Membership'
            dataArray={data.body}
        />
    );
}