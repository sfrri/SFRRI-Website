import data from '../../../_data/society/governance-&-byelaws.json'
import BasicPage from '../components/BasicPage';

const title = 'SFRRI Governance & Byelaws'

export const metadata = {
    title: title,
}

export default async function GovernanceAndByelaws() {
    return (
        <BasicPage
            title={title}
            dataArray={data.body}
        />
    );
}