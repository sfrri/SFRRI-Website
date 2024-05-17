import data from '../../../_data/news/meetings.json'
import MeetingStylePage from '../components/MeetingStylePage';

const title = 'Forthcoming Related Meetings'

export const metadata = {
    title: title,
}

export default function ForthcomingRelatedMeetings() {
    return (
        <MeetingStylePage
            title={title}
            dataArray={data.meetings}
            relatedMeetings={true}
        />
    );
}