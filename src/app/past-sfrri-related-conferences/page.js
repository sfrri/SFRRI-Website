import * as React from 'react';
import Paper from '@mui/material/Paper';
import data from '../../../_data/conferences/past-sfrri-related-conferences.json'
// import Markdown from 'react-markdown'
// import rehypeExternalLinks from 'rehype-external-links'
// import rehypeRaw from 'rehype-raw'
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import NewsItem from '../components/NewsComponents'

const Item = styled(Box)(() => ({
    position: 'relative',
    // padding: pathname === '/' ? '2px 10px' : '2px 0',
    pageBreakInside: 'avoid',                 /* Theoretically FF 20+ */
    breakInside: 'avoid-column',              /* Chrome, Safari, IE 11 */
    // display: 'table',                      /* Actually FF 20+ */

}));

export default async function SFRRIRelatedConferences() {
    "use server";
    return (
        <main>
            <Paper variant="padded" elevation={3}>
                <h2>Past SFRRI Related Conferences</h2>
                {/* {data.body && <Markdown rehypePlugins={[[rehypeExternalLinks, {target: '_blank'}], [rehypeRaw]]}>{data.body}</Markdown>} */}
                {data.past_sfrri_related_conferences && data.past_sfrri_related_conferences.map(item => (
                    <Item key={item["Meeting Title"]}>
                        <NewsItem
                            date={item.date}
                            title={item.meeting_title}
                            location={item.location}
                            link={item.further_information_link_hypertext ? item.further_information_link_hypertext : item.upload_path[0]}
                            linkText={item.further_information_link_text}
                            body={item.body}
                        />
                    </Item>
                ))}
            </Paper>
        </main>
    );
}