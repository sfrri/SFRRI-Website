import * as React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export const NavButton = ({url, name}) => {
    return (
        <Button
            component={Link}
            variant='HomeNav'
            href={`/${url}`}
            sx={{
                color: '#fff',
                border: '1px solid #111',
                borderBottom: '2px solid #111',
                borderRadius: '3px',
                //background: 'radial-gradient(ellipse at top,#4282dd 0,#1d5097 90%)',
                background: 'radial-gradient(ellipse at center, #497abf 0, #1858b1 90%)',
                //backgroundImage: 'radial-gradient(at 50% 100%, rgb(68, 122, 199) 0px, rgb(64, 124, 209) 75%)',
                fontSize: '18px',
                textTransform: 'capitalize',
                lineHeight: '50px',
                padding: '0 18.33px',
                padding: '0 15.86px',
            }}
        >
            {name}
        </Button>
    )
}