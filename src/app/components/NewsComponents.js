import Link from 'next/link'

export const AwardLectureItem = ({link, person, award,}) => {
    return (
        <li>
            <Link 
                href={link} 
                target="_blank"
            >
                {person}
            </Link>
            {` - ${award}`}
        </li>
    )
}

export const NewsItem = ({date, title, location, link, linkText,}) => {
    return (
        <>
            <p>
                <span className="italic" dangerouslySetInnerHTML={{ __html: date }} /><br />
                <span className="bold" dangerouslySetInnerHTML={{ __html: title }} /><br />
                <span className="italic">Location:</span>&nbsp;<span dangerouslySetInnerHTML={{ __html: location }} /><br />
                {/*<span className="italic">Further information:</span>
                <a 
                    href={link} 
                    target="_blank"
                >
                    {` ${link}`}
                </a>*/}
                <span className="italic">Further information:&nbsp;</span>
                <Link 
                    href={link} 
                    target="_blank"
                >
                    {linkText}
                </Link>
            </p>
        </>
    )
}

export const InMemoriamItem = ({link, person,}) => {
    return (
        <p 
            style={{ 
                fontVariant: 'small-caps', 
                textTransform: 'capitalize', 
            }}
        >
            <Link 
                href={link} 
                target="_blank"
            >
                {person}
            </Link>
        </p>
    )
}
