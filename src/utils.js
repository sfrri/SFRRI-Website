import { useTheme } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
