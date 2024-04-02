import * as React from 'react';
import { Paper } from '@mui/material/';

export default async function HomePage({children}) {
    "use server";
    return (
        <Paper 
            variant="padded" 
            className={'MuiPaper-elevation3'}
            sx={{
                marginBottom: '10px',
                backgroundImage: 'url(/static/images/Hinge_top_vials_on_a_vial_rack.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                color: '#fff',
                position: 'relative',
                borderRadius: '3px',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: 'rgba(57, 51, 39, 0.65)',
                    backgroundColor: 'rgba(5, 0, 10, 0.75)',
                },
                '& hr': {
                    display: 'none',
                },
            }}
        >
            {children}
        </Paper>
    );
}