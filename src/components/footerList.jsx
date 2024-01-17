import { AppBar, Avatar, Box, Divider, IconButton, InputBase, List, ListItem, ListItemAvatar, ListItemText, Toolbar, Typography } from '@mui/material'
import { Notifications, KeyboardArrowDown, PermIdentity, FavoriteBorder, ShoppingCartOutlined, InfoOutlined } from '@mui/icons-material';
import React from 'react'
import Logo from "../assets/jpegs/noon-logo-en.png";
import DubaiFlag from "../assets/jpegs/dubai.png";


const FooterList = ({ header, subText }) => {
    return (
        <Box>
            <Typography variant='h6' sx={{ fontSize: 16 }} gutterBottom>{header}</Typography>
            {subText.map(text => {
                return <Typography variant='body2' gutterBottom>{text}</Typography>
            })}
        </Box>
    )
}

export default FooterList
