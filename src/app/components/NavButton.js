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
                flexGrow: 1,
                height: '53px',
                color: '#fff',
                border: '1px solid #111',
                borderBottom: '2px solid #111',
                borderRadius: '3px',
                background: 'radial-gradient(ellipse at center, #497abf 0, #1858b1 90%)',
                fontSize: '18px',
                textTransform: 'capitalize',
                lineHeight: '50px',
            }}
        >
            {name}
        </Button>
    )
}