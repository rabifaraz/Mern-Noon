import { AppBar, Avatar, Box, Divider, IconButton, InputBase, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { ArrowDropDown } from '@mui/icons-material';
import React from 'react'


const NavbarItem = ({ title }) => {
    return (
        <Typography>
            {title}
        </Typography>
    )
}

export default NavbarItem