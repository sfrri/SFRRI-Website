import data from '../../../_data/conferences/future-sfrri-conferences.json'
import MeetingStylePage from '../components/MeetingStylePage';

export default function FutureSFRRIConferences() {
    return (
        <MeetingStylePage
            title='Future SFRRI Conferences'
            dataArray={data.future_sfrri_conferences}
            relatedMeetings={false}
        />
    );
}