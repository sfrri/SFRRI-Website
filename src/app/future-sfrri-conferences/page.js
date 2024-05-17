import data from '../../../_data/conferences/future-sfrri-conferences.json'
import MeetingStylePage from '../components/MeetingStylePage';

const title = 'Future SFRRI Conferences'

export const metadata = {
    title: title,
}

export default function FutureSFRRIConferences() {
    return (
        <MeetingStylePage
            title={title}
            dataArray={data.future_sfrri_conferences}
            relatedMeetings={false}
        />
    );
}