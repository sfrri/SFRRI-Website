import * as React from 'react';
import { Paper, Box } from '@mui/material/';

export default function PaperPadded({children}) {
    <Paper elevation={3}>
        <Box p={4}>
            {children}
        </Box>
    </Paper>
}
