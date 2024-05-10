import data from '../../../_data/conferences/rules-for-conference-organisation.json'
import BasicPage from '../components/BasicPAge';

export default function RulesforConferenceOrganisation() {
    return (
        <BasicPage
            title='Rules for Conference Organisation'
            dataArray={data.body}
        />
    );
}