import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export default function PaperPadded({children}) {
    <Paper elevation={3}>
        <Box p={4}>
            {children}
        </Box>
    </Paper>
}
