import data from '../../../_data/society/women-in-science-forum.json'
import BasicPage from '../components/BasicPage';

export default function WomeninScienceForum() {
    return (
        <BasicPage
            title='Women in Science Forum'
            dataArray={data.body}
        />
    );
}