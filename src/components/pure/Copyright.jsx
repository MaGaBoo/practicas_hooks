import React from 'react';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

const Copyright = () => {
    return (
        <Typography variant='body2' color='GrayText' align='center'>
            { 'Copyright © '}

        <Link color='inherit' href='https://github.com/MaGaBoo'>
            María Gallego
        </Link>
        {' '}
        { new Date().getFullYear() }
        </Typography>
    );
}

export default Copyright;
