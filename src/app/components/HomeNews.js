import * as React from 'react';
import Paper from '@mui/material/Paper';
import HomeBGImg from './HomeBGImg';

export default function HomeNews({ children }) {
    return (
        <Paper
            className={'MuiPaper-elevation3'}
            sx={{
                marginBottom: '10px',
                color: '#fff',
                position: 'relative',
                borderRadius: '3px',
                zIndex: 0,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: 'rgba(57, 51, 39, 0.65)',
                    backgroundColor: 'rgba(5, 0, 10, 0.75)',
                    zIndex: 1,
                },
                '& a': {
                    color: '#fff',
                },
                '& hr': {
                    display: 'none',
                },
            }}
        >
            <HomeBGImg />
            <div style={{
                zIndex: 1,
                position: 'relative',
                padding: '30px',
                display: 'block',
            }}>
                {children}
            </div>
        </Paper>
    );
}