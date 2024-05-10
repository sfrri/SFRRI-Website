import React from "react";
import Link from 'next/link'
import DOMPurify from 'isomorphic-dompurify';
import { TypographyH2Renderer, TypographyH4Renderer, MarkdownComponent } from '@/utils'
import Markdown from "react-markdown";
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'

const NewsItem = ({ date, title, location, link, linkText, body, }) => {
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
                    <Markdown
                        rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }], [rehypeRaw]]}
                        components={{
                            h2: ({ node, ...props }) => <TypographyH2Renderer {...props} />,
                            h4: ({ node, ...props }) => <TypographyH4Renderer {...props} />,
                            p: React.Fragment,
                        }}
                    >{location}
                    </Markdown>
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
