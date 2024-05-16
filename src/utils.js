import { useTheme } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Markdown from 'react-markdown';
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'
import Link from 'next/link';

//convert string to kebab case
export const kebabize = string => string.toString()
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

// custom breakpoints
const breakpointOverrides = {
    xs: 0,
    sm: 434,
    md: 493,
    lg: 803,
    xl: 1200,
};

const getCustomTheme = (theme) =>
    createTheme({
        ...theme,
        breakpoints: { values: { ...breakpointOverrides } }
    });


export const CustomBreakpoints = ({ children }) => {
    const theme = useTheme();
    return (
        <ThemeProvider theme={getCustomTheme(theme)}>
            <>{children}</>
        </ThemeProvider>
    );
};

//markdown component
const TypographyRenderer = (props) => {
    const hNo = `h${props.hLevel}`
    return (
        <Typography variant={hNo}>{props.children}</Typography>
    )
}

const LinkSanitised = (props) => {
    let newHref
    const regexpEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi
    const regexpMatch = props.href.match(regexpEmail)
    //check upload path from CMS does not include 'public/'
    if (props.href.includes('public/admin/')) {
        newHref = props.href.replace('public/admin/', 'admin/')
        return <Link href={newHref} prefetch={false} target='_blank'>{props.children}</Link>
    }
    //check mailto: is appended to email address href
    if (regexpMatch) {
        let sanitisedHref = props.href
        if (props.href.substring(0, 7) != 'mailto:') {
            sanitisedHref = `mailto:${sanitisedHref}`
        }
        return <Link href={sanitisedHref} prefetch={false} target='_blank'>{props.children}</Link>
    }
    //don't render empty links
    if (props.children === undefined) {
        return
    //otherwise render a next link component as usual
    } else {
        return <Link href={props.href} prefetch={false} target='_blank'>{props.children}</Link>
    }
}

export const MarkdownComponent = ({ children, ...props }) => {
    return (
        <Markdown
            rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }], [rehypeRaw]]}
            components={{
                h2: ({ node, ...props }) => <TypographyRenderer {...props} hLevel={2} />,
                h4: ({ node, ...props }) => <TypographyRenderer {...props} hLevel={4} />,
                a: ({ node, ...props }) => <LinkSanitised {...props} />
            }}
            {...props}
        >
            {children}
        </Markdown>
    )
}
