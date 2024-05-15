import data from '../../../_data/conferences/past-sfrri-related-conferences.json'
import MeetingStylePage from '../components/MeetingStylePage';

export default function SFRRIRelatedConferences() {
    return (
        <MeetingStylePage
            title='Past SFRRI Related Conferences'
            dataArray={data.past_sfrri_related_conferences}
            relatedMeetings={false}
        />
    );
}
