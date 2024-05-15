
const SFRRIOutreachItem = ({ link, text, }) => {

    if (link.startsWith('public')) {
        link = link.replace('public', '')
    }

    return (
        <p>
            <a href={link} target="_blank">
                {text}
            </a>
        </p>
    )
}

export default SFRRIOutreachItem
