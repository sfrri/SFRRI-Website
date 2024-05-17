import data from '../../../_data/conferences/rules-for-conference-organisation.json'
import BasicPage from '../components/BasicPage';

const title = 'Rules for Conference Organisation'

export const metadata = {
    title: title,
}

export default function RulesforConferenceOrganisation() {
    return (
        <BasicPage
            title={title}
            dataArray={data.body}
        />
    );
}