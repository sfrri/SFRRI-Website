import data from '../../../_data/conferences/past-sfrri-related-conferences.json'
import MeetingStylePage from '../components/MeetingStylePage';

const title = 'Past SFRRI Related Conferences'

export const metadata = {
    title: title,
}

export default function SFRRIRelatedConferences() {
    return (
        <MeetingStylePage
            title={title}
            dataArray={data.past_sfrri_related_conferences}
            relatedMeetings={false}
        />
    );
}
