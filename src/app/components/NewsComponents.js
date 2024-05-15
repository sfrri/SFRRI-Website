import React from "react";
import Link from 'next/link'
import DOMPurify from 'isomorphic-dompurify';
import { MarkdownComponent } from '@/utils'

const NewsItem = ({ date, title, location, link, linkText, body, }) => {

    if(link.startsWith('public')) {
        link = link.replace('public','')
    }
    
    return (
        <>
            <div style={{ marginBottom: '1em', wordWrap: 'break-word', }}>
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
                    <MarkdownComponent
                        components={{
                            p: ({ node, ...props }) => <React.Fragment {...props} />
                        }}
                    >{location}
                    </MarkdownComponent>
                    <br />
                </>}
                {link && <>
                    <span className="italic">Further information:&nbsp;</span>
                    <Link
                        prefetch={false}
                        href={link}
                        target="_blank"
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(linkText) }}
                    />
                    <br />
                </>}
                {body && <MarkdownComponent>{body}</MarkdownComponent>}
            </div>
        </>
    )
}

export default NewsItem
