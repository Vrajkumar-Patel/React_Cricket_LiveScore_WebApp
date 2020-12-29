import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';

const Navbar = () => {
    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton color='inherit'>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Typography variant='h6'>
                        VJ's Cricket LiveScore Web App
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );

}

export default Navbar;