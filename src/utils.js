import { useTheme } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Markdown from 'react-markdown';
import rehypeExternalLinks from 'rehype-external-links'
import rehypeRaw from 'rehype-raw'

export const kebabize = string => string.toString()
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

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

// and around your component:
export const CustomBreakpoints = ({ children }) => {
    const theme = useTheme();
    return (
        <ThemeProvider theme={getCustomTheme(theme)}>
            <>{children}</>
        </ThemeProvider>
    );
};

export const TypographyH2Renderer = (props) => {
    return (
        <Typography variant='h2'>{props.children}</Typography>
    )
}

export const TypographyH4Renderer = (props) => {
    return (
        <Typography variant='h4'>{props.children}</Typography>
    )
}

export const MarkdownComponent = ({ children }) => {
    return (
        <Markdown
            rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }], [rehypeRaw]]}
            components={{
                h2: ({ node, ...props }) => <TypographyH2Renderer {...props} />,
                h4: ({ node, ...props }) => <TypographyH4Renderer {...props} />
            }}
        >
            {children}
        </Markdown>
    )
}