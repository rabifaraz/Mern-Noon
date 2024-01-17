import { AppBar, Avatar, Box, Divider, IconButton, InputBase, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { ArrowDropDown } from '@mui/icons-material';
import React from 'react'
import NavbarItem from './navbarItem';


const Navbar = () => {
    return (
        <Box sx={{ bgcolor: 'background.paper', display: 'flex', alignItems: 'center', gap: 2 }}>
            <List sx={{ bgcolor: 'background.transparent' }}>
                <ListItem>
                    <ListItemText
                        sx={{ color: 'blue', fontWeight: 800 }}
                        primary="ALL CATAGORIES"
                    />
                    <ListItemIcon>
                        <ArrowDropDown sx={{ color: 'blue' }} />
                    </ListItemIcon>
                    <Divider orientation="vertical" flexItem />
                </ListItem>
            </List>
            {['ELECTRONICS', 'MEN', 'WOMEN', 'HOME', 'BEAUTY & FRAGNANCE', 'TOY', 'SPORTS', 'BEST SELLERS', 'APPLIANCES', 'CD', 'DVD', 'LED', 'COMPUTER', 'SELL NOON'].map(item => {
                return <NavbarItem title={item} />
            })}
        </Box>
    )
}

export default Navbar