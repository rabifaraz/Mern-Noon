import { AppBar, Avatar, Box, Divider, IconButton, InputBase, List, ListItem, ListItemAvatar, ListItemText, Toolbar, Typography } from '@mui/material'
import { Notifications, KeyboardArrowDown, PermIdentity, FavoriteBorder, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'
import Logo from "../assets/jpegs/noon-logo-en.png";
import DubaiFlag from "../assets/jpegs/dubai.png";


const Banner = ({ image }) => {
  return (
    <img src={image} />
  )
}

export default Banner