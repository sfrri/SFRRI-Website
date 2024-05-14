import { useTheme } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Markdown from 'react-markdown';
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'

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

export const MarkdownComponent = ({ children, ...props }) => {
    return (
        <Markdown
            rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }], [rehypeRaw]]}
            components={{
                h2: ({ node, ...props }) => <TypographyRenderer {...props} hLevel={2} />,
                h4: ({ node, ...props }) => <TypographyRenderer {...props} hLevel={4} />
            }}
            {...props}
        >
            {children}
        </Markdown>
    )
}
