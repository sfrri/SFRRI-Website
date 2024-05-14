import data from '../../../_data/society/governance-&-byelaws.json'
import BasicPage from '../components/BasicPage';

export default async function GovernanceAndByelaws() {
    return (
        <BasicPage
            title='SFRRI Governance & Byelaws'
            dataArray={data.body}
        />
    );
}