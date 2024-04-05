import { useTheme } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//export const kebabize = str => str.toString().replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase())

export const kebabize = string => string.toString()
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

const breakpointOverrides = {
    xs: 0,
    sm: 408,
    md: 493,
    lg: 623,
    xl: 803
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