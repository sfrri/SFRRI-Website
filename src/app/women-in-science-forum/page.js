import data from '../../../_data/society/women-in-science-forum.json'
import BasicPage from '../components/BasicPage';

const title = 'Women in Science Forum'

export const metadata = {
    title: title,
}

export default function WomeninScienceForum() {
    return (
        <BasicPage
            title={title}
            dataArray={data.body}
        />
    );
}