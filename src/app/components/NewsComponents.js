import React from "react";
import Link from 'next/link'
import DOMPurify from 'isomorphic-dompurify';
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'

// export const AwardLectureItem = ({ link, person, award, }) => {
//     return (
//         <li>
//             <Link href={link} target="_blank">
//                 {person}
//             </Link>
//             {` - ${award}`}
//         </li>
//     )
// }

const NewsItem = ({ date, title, location, link, linkText, body, }) => {
    return (
        <>
            <p>
                {date && <>
                    <span
                        className="italic"
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(date) }}
                    />
                    <br />
                </>}
                {title && <>
                    <span
                        className="bold"
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }}
                    />
                    <br />
                </>}
                {location && <>
                    <span className="italic">Location:&nbsp;</span>
                    <Markdown rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }], [rehypeRaw]]} components={{ p: React.Fragment, }}>{location}</Markdown>
                    <br />
                </>}
                {link && <>
                    <span className="italic">Further information:&nbsp;</span>
                    <Link
                        href={link}
                        target="_blank"
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(linkText) }}
                        prefetch={false}
                    />
                </>}
                {body && <Markdown rehypePlugins={[[rehypeExternalLinks, {target: '_blank'}], [rehypeRaw]]}>{data.body}</Markdown>}
            </p>
        </>
    )
}

export default NewsItem

// export const InMemoriamItem = ({ link, person, }) => {
//     return (
//        person && <p style={{ fontVariant: 'small-caps', textTransform: 'capitalize', }}>
//             <Link href={link} target="_blank">
//                 {person}
//             </Link>
//         </p>
//     )
// }
