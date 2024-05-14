import data from '../../../_data/news/meetings.json'
import MeetingStylePage from '../components/MeetingStylePage';

export default function ForthcomingRelatedMeetings() {
    return (
        <MeetingStylePage
            title='Forthcoming Related Meetings'
            dataArray={data.meetings}
            relatedMeetings={true}
        />
    );
}