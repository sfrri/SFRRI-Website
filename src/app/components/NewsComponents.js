import React from "react";
import Link from 'next/link'
import DOMPurify from 'isomorphic-dompurify';
import Markdown from 'react-markdown'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'

export const AwardLectureItem = ({ link, person, award, }) => {
    return (
        <li>
            <Link href={link} target="_blank">
                {person}
            </Link>
            {` - ${award}`}
        </li>
    )
}

export const NewsItem = ({ date, title, location, link, linkText, }) => {
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
                {/* <span className="italic">Location:&nbsp;</span>
                <span 
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(location) }} 
                />
                <br /> */}
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
                    />
                </>}
                {/* {linkText}
                </Link> */}
            </p>
        </>
    )
}

export const InMemoriamItem = ({ link, person, }) => {
    return (
        <p style={{ fontVariant: 'small-caps', textTransform: 'capitalize', }}>
            <Link href={link} target="_blank">
                {person}
            </Link>
        </p>
    )
}
